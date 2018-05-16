import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statu extends Component {
    constructor(props){
        super(props);
        this.renderStats = this.renderStats.bind(this)
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextProps, nextState, "Hello will");
    }


    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState, "Hello Did");
    }

    renderStats(stats){
        return stats.map((stat, i) => {
            return (<p key={i} >{stat.stat.name}:{stat.base_stat}</p>)
        })
    }

    render() {
        let stats = this.renderStats(this.props.stats);
        return (
            <div>
                {
                (this.props.stats.length === 0)? "soy undefined" : stats
                }
            </div>
        );
    }
}

export default Statu;

Statu.PropTypes = {
    stats: PropTypes.array
}

Statu.defaultProps = {
    stats: [
        {
            "stat": {
                "url": "",
                "name": ""
            },
            "effort": "",
            "base_stat": ""
        },
    ]
}