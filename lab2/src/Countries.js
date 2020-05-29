import React from 'react';
export default class Contries extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        countries: []
      };
    }
  
    componentDidMount() {
      fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              countries: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, countries } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <ul>
            {countries.map(countries => (
              <li key={countries.name}>
                {countries.name} {countries.alpha2Code}
              </li>
            ))}
          </ul>
        );
      }
    }
  }