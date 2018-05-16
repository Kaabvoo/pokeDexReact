import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Imagin extends Component {
    constructor(){
        super();
        this.recibirImagen = this.recibirImagen.bind(this);
    }

    recibirImagen(props){
    }

    render() {
        return (
            <div>
                <img src={this.props.imagen} alt="Broken"/>
            </div>
        );
    }
}

export default Imagin;

Imagin.PropTypes = {
    imagen: PropTypes.string
}

Imagin.defaultProps = {
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}