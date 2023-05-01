import React from 'react';
import classes from "./comment.module.css";

const Comment = ({image,name,text}) => {
    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <img src={image} className={classes.img}/>
                <div style={{marginLeft: '15px'}}>
                    <p className={classes.title}>{name}</p>
                </div>
            </div>
            <p  style={{
                margin:'0 25px 0 25px',
                borderBottom: '1px solid #9d9a9a',
                paddingBottom: '35px' }}
            className={classes.text}>{text}</p>
        </div>
    );
};

export default Comment;