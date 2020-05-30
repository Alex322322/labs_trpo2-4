# set the base image
# n/b: for production, node is only used for building
# the static Html and javascript files
# as react creates static html and js files after build
# these are what will be served by nginx
# use alias build to be easier to refer this container elsewhere
# e.g inside nginx container
FROM node:alpine as build
# set working directory
# this is the working folder in the container
# from which the app will be running from
WORKDIR /app
# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY . /app
# install and cache dependencies
RUN npm install
#build the project for production
RUN npm run build
# set up production environment
# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80 to the outer world
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]