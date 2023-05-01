import React from 'react';
import classes from "./works.module.css";


const Works = ({image}) => {
    return (
            <img className={classes.image__item} src={image}/>
    );
};

export default Works;