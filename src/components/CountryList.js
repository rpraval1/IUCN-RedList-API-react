import React, { Component } from 'react';

class CountryList extends Component{

  handleClick(isocode){
    this.props.getIsocode(isocode)
  }
  renderCountryList(){
    const {countries} = this.props

    return countries.map(country => {
      return (
        <tr key={country.isocode}>
          <td>{country.isocode}</td>
          <td onClick={this.handleClick.bind(this, country.isocode)}>{country.country}</td>
        </tr>
      );
    })
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
