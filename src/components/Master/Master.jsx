import React from 'react';
import classes from "./master.module.css";

const Master = ({text, image, name, jobs, desc}) => {

    return (
            <div className={classes.card}>
                <span className={classes.sub__title}>{jobs}</span>
                <div className={classes.inner}>
                    <h2 className={classes.title}>{name}</h2>
                    <p className={classes.text}>{text}</p>
                    {desc
                        ?
                        <ul className={classes.list}>
                            {desc.map((itemDecs) => <li key={itemDecs.length} className={classes.sub__text}>{itemDecs}</li>)}
                        </ul>
                        :
                        ''
                    }
                </div>
                <div className={classes.image}>
                    <img className={classes.img} src={image}/>
                </div>
            </div>
    );
};

export default Master;