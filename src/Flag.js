import React from 'react';
import PropTypes from 'prop-types';

export default class Flag extends React.Component {
  render() {
    const { country } = this.props;
    return (
      <img alt="flag" data-testid="flag-img" src={`https://www.countryflags.io/${country.value}/shiny/64.png`} />
    );
  }
}

Flag.propTypes = {
  country: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
