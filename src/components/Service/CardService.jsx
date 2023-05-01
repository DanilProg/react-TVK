import React from 'react';
import classes from "./service.module.css";
import CustomLink from "../CustomLink/CustomLink";



const CardService = ({title, text, image, link}) => {
    return (
        <div className={classes.card}
             style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className={classes.card__inner}>
                <h3 className={classes.card__title}>{title}</h3>
                <p className={classes.card__text}>{text}</p>
            </div>
            <CustomLink to={link}>
                <button className={classes.card__btn}>Побробнее</button>
            </CustomLink>
        </div>
    );
};

export default CardService;