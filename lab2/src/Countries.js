import React from 'react';
import Select from 'react-select'

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
            const listItem = result.map(function (country) {
                return {
                     value: country.alpha2Code,
                     label: country.name
                 };
             });
            this.setState({
              isLoaded: true,
              countries: listItem
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
            <div>
                <Select options={countries}/>
            </div>
            
          
        );
      }
    }
  }