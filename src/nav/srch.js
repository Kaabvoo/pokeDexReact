import React, { Component } from 'react';
import gapi from '../services/getPk'
import './srch.css'

class SearchItems extends Component {
  constructor(){
    super()
    this.state={
      msg: ''
    }
  }

  clicked(i){
    alert (gapi.getPokeData(i.target.value).then(res=>{this.setState(JSON.stringify(res))}));
    alert(this.state.msg);
    //this.setState({msg: Api.getPokeData('1').then(res => {return res})}) 
  }

  render() {
    return(
      <div>
        
      </div>
    );
  }
}

export default SearchItems