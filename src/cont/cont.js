import React, { Component } from 'react';
import Imagin from './sprite/img'
import Status from './stats/stats'
import gapi from '../services/getPk'
import './cont.css'

class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            msg: {},
            name: '',
            url: '',
            stats: [],
        }
        this.updat = this.updat.bind(this);
    }

    repo

    updat(i){
        i.preventDefault();
        gapi.getPokeData(i.target.value).then(res => {
            this.setState({
                name : JSON.parse(res).data.name,
                url : JSON.parse(res).data.sprites.front_default,
                stats : JSON.parse(res).data.stats,
            });
            //console.log(JSON.parse(res).data.stats);
        })
        console.log(this.state.stats)
        //console.log(JSON.stringify(this.state.msg));
    }

    returnDataTP(resp){
        this.props.obtainChildrenData(resp);
    }

    render() {
        return (
            <div className = "conteinerBlock">
                <label for="inPk">Search Pokemon</label>
                <input name="inPK" type="number" onChange={this.updat} />
                {
                    (this.state.length === 0)? "soy undefined" : <Imagin imagen={this.state.url}/>
                }
                {
                    (this.state.length === 0)? "soy undefined" : <Status stats={this.state.stats}/>
                }
            </div>
        );
    }
}

export default Content;
