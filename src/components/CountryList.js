import React, { Component } from 'react';
import '../../style/CountryList.css';

class CountryList extends Component{

  handleClick(isocode){
    this.props.getIsocode(isocode)
  }
  renderCountryList(){
    const {countries, countrySearched} = this.props
    if(countrySearched){
      return countries.map(country => {
        if ((country.isocode.includes(countrySearched)) || (country.country.includes(countrySearched))){
          return (
            <tr key={country.isocode}>
              <td onClick={this.handleClick.bind(this, country.isocode)}>{country.isocode}</td>
              <td onClick={this.handleClick.bind(this, country.isocode)}>{country.country}</td>
            </tr>
          );
        }
      })
    }
    else{
      return countries.map(country => {
        return (
          <tr className="select-country" key={country.isocode}>
            <td onClick={this.handleClick.bind(this, country.isocode)}>{country.isocode}</td>
            <td onClick={this.handleClick.bind(this, country.isocode)}>{country.country}</td>
          </tr>
        );
      })
    }
  }
  render(){

    return (
      <div className="table-responsive col-sm-4">
        <table className="table">
          <thead>
            <tr>
              <th>Isocode</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCountryList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryList;
