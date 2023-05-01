import React from 'react';
import classes from "./works.module.css";

const WorksCard = ({image, name, fetchingAlbums, idAlbum}) => {

    return (
        <div className={classes.card}>
            <div className={classes.inner}>
                <h2 className={classes.title}>{name}</h2>
                <img className={classes.img} src={image}/>
                <button className='btn' onClick={() => fetchingAlbums(idAlbum)}>Показать работы</button>
            </div>
        </div>
    );
};

export default WorksCard;