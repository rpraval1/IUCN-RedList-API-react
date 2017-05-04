import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange(event){
    this.setState({
      inputValue: event.target.value
    })
    this.props.getCountrySearched(event.target.value)
  }

  render(){
    const {inputValue} = this.state
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Countries - Species</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
