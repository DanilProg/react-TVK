import React from 'react';
import classes from "./service.module.css";
const Questions = ({title, text}) => {
    return (
        <div>
            <h4 className={classes.sub__title}>{title}</h4>
            <p className={classes.sub__text}>{text}</p>
        </div>
    );
};

export default Questions;