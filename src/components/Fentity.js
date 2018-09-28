import React, { Component } from 'react';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        console.log(this.props);
        let fentitiesCategory=this.props.match.params.fentities;
        let fentity_name=this.props.match.params["name"];
        console.log(fentitiesCategory+" fent "+fentity_name);
        console.log(this.props.state[fentitiesCategory]);
        const fentity = this.props.state[fentitiesCategory].filter(el => {
            console.log("el "+el);
           return el["name"].toLowerCase()===fentity_name.toLowerCase()   
        })[0];
        console.log("fentity " + fentity["name"]);
        return (
            <div id="creature-container">
                <h1>{fentity["name"]}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
