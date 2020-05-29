import React from 'react';
import Select from 'react-select'

export default class Flag extends React.Component {
    constructor(props) {
    super(props);
    }
 
    render() {
        return (
                <img src= {`https://www.countryflags.io/${this.props.country.value}/shiny/64.png`} />
        );
    }
  }