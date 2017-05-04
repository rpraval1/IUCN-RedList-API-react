import React, { Component } from 'react';
import CountryList from './CountryList';
import SpecieDetail from './SpecieDetail';

class ShowCountries extends Component {
  constructor(props){
    super(props);
    this.state = {
      isocode: ''
    }

  }

  getIsocode(isocode){
    this.setState({
      isocode: isocode
    })
  }

  render() {
    const {countries, countrySearched} = this.props
    const {isocode} = this.state
    return (
      <div>
        {isocode
          ?
          <SpecieDetail isocode={isocode}/>
          :
          <CountryList countrySearched={countrySearched} countries={countries} getIsocode={this.getIsocode.bind(this)}/>
        }
      </div>
    );
  }
}

export default ShowCountries;
