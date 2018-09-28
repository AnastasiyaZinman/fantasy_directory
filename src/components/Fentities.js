import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
   
    render() { 
        console.log(this.props);
        let fentitiesCategory=this.props.match.params.fentities;
        let path=`/directory/${fentitiesCategory}/`;
        return (
            <div>
                <h3 id="fentities-title">{fentitiesCategory}</h3>
                <div id="fentities-container">
                    {this.props.state[fentitiesCategory].map((f,i) => {
                        return (
                            <div className="mini" key={i}>
                                <img className="directory-img" src={f.imgUrl} alt="" />
                                <span><Link to={path+`${f.name}`}>{f.name}</Link></span>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities