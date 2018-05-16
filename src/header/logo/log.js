import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './log.css'

export default class Logo extends Component {
    render() {
        return (
            <img src={this.props.url} alt="Not Working!"/>
        );
    }
}

Logo.PropTypes = {
    url: PropTypes.string.isRequired
}

Logo.defaultProps={
    name: ":'( not Working!! </3"
}