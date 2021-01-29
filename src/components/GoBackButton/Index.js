import React from "react";
import {Link}from "react-router";


export default function GoBackButton(){
    return(
        <Link to="/"><button>Home</button></Link>
    )
}