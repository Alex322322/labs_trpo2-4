import React from 'react';
import Select from 'react-select';
import Flag from './Flag';

export default class Contries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      countries: [],
      currentCountry: { label: 'Russian Federation', value: 'RU' },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')
      .then((res) => res.json())
      .then(
        (result) => {
          const listItem = result.map((country) => ({
            value: country.alpha2Code,
            label: country.name,
          }));
          this.setState({
            countries: listItem,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  handleChange(country) {
    this.setState({ currentCountry: country });
  }


  render() {
    const { error, countries, currentCountry } = this.state;
    if (error) {
      return (
        <div>
          Ошибка:
          {error.message}
        </div>
      );
    }
    return (
      <div>
        <h2>
          Select country
        </h2>
        <Select
          options={countries}
          value={currentCountry}
          onChange={this.handleChange}
        />
        <h2>
          Country flag
        </h2>
        {currentCountry && <Flag country={currentCountry} />}
      </div>
    );
  }
}
