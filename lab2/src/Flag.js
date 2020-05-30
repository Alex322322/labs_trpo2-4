import React from 'react';

export default class Flag extends React.Component {
  render() {
    return (
      <img alt="flag" data-testid="flag-img" src={`https://www.countryflags.io/${this.props.country.value}/shiny/64.png`} />
    );
  }
}
