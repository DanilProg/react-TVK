import React from 'react';
import classes from "./burgerMenu.module.css";
import {NavLink} from "react-router-dom";
import BrnClose from '../assets/image/close-circle-svgrepo-com.svg'
const BurgerModal = ({active, setActive}) => {
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div className={ active ? 'modal' : 'modal__active'}>
            <button className={classes.btn} onClick={() => setActive(!active)}><img src={BrnClose} style={{width:'50px'}}/></button>
            <nav className={classes.nav}>
                <NavLink className={classes.link} onClick={() => handleClick()} to='/'>ГЛАВНАЯ</NavLink>
                <NavLink className={classes.link}  onClick={() => handleClick()} to='/masters'>МАСТЕРА</NavLink>
                <NavLink className={classes.link} onClick={() => handleClick()}  to='/services'>УСЛУГИ</NavLink>
                <NavLink className={classes.link} onClick={() => handleClick()}  to='/works'>НАШИ РАБОТЫ</NavLink>
                <NavLink className={classes.link}  onClick={() => handleClick()} to='/comments'>ОТЗЫВЫ</NavLink>
                <NavLink className={classes.link}  onClick={() => handleClick()} to='/contact'>КОНТАКТЫ</NavLink>
            </nav>
        </div>
    );
};

export default BurgerModal;