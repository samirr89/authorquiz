import React from 'react';
import { Link } from 'react-router-dom';
const Hero=()=>{
    return (
        <div className="row">
            <div className="jumbotron col-12">
            <h1>Author Quiz</h1>
            <p> Select the book written by the author shown</p>
            <Link className="btn btn-primary btn-lg" to="/about">Learn more</Link>
           
        </div>
        </div>
    )
}

 export default Hero;