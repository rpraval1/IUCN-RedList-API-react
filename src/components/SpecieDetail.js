import React, { Component } from 'react';

class SpecieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultSpecies: []
    }
  }

  componentDidMount(){
    const {isocode} = this.props
    var specieUrl = "http://apiv3.iucnredlist.org/api/v3/country/getspecies/"+isocode+"?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

    fetch(specieUrl)
    .then(response => {
      return response.json()
    })
    .then(body => {
        this.setState({
          resultSpecies: body
        })
    })
  }

  renderSpecies(){
    const {resultSpecies} = this.state
    return resultSpecies.result.map(specie => {
      return (
        <tr key={specie.taxonid}>
          <td>{specie.taxonid}</td>
          <td>{specie.scientific_name}</td>
          <td>{specie.category}</td>
        </tr>
      );
    })
  }


  render(){
    const {resultSpecies} = this.state
    console.log(resultSpecies)
    if(resultSpecies.length > 0){
      return(
        <div>
          <h1>
            Selected {resultSpecies.country}
          </h1>

          <div className="table-responsive col-sm-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Taxonid</th>
                  <th>Scientific Name</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {this.renderSpecies()}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>
          <h1>Fetching Results...</h1>
        </div>
      );
    }

  }
}

export default SpecieDetail;
