import React, { Component } from 'react';
import ShowCountries from './ShowCountries';
import Header from './Header';

const API_KEY = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      countrySearched: ''
    }
    var baseUrl = `http://apiv3.iucnredlist.org/api/v3/country/list?token=${API_KEY}`;

    fetch(baseUrl)
     .then(response => {
       return response.json()
     })
     .then(body => {
         this.setState({
           countries: body.results
         })
     })
  }

  getCountrySearched(searchValue){
    this.setState({
      countrySearched: searchValue
    })
  }


  render() {
    const {countries, countrySearched} = this.state
    console.log(countrySearched)
    return (
      <div>
        <Header getCountrySearched={this.getCountrySearched.bind(this)}/>
        <ShowCountries countrySearched={countrySearched} countries={countries}/>
      </div>
    );
  }
}

export default App;
