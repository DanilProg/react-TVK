import React from 'react';
import classes from "./burgerMenu.module.css";
import {NavLink} from "react-router-dom";
import BrnClose from '../assets/image/close-circle-svgrepo-com.svg'
const BurgerModal = ({active, setActive}) => {
    return (
        <div className={classes.modal}>
            <button className={classes.btn} onClick={() => setActive(!active)}><img src={BrnClose} style={{width:'50px'}}/></button>
            <nav className={classes.nav}>
                <NavLink className={classes.link} to='/'>ГЛАВНАЯ</NavLink>
                <NavLink className={classes.link} to='/masters'>МАСТЕРА</NavLink>
                <NavLink className={classes.link} to='/services'>УСЛУГИ</NavLink>
                <NavLink className={classes.link} to='/works'>НАШИ РАБОТЫ</NavLink>
                <NavLink className={classes.link} to='/comments'>ОТЗЫВЫ</NavLink>
                <NavLink className={classes.link} to='/contact'>КОНТАКТЫ</NavLink>
            </nav>
        </div>
    );
};

export default BurgerModal;