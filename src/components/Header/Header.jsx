import React from 'react';
import classes from "./header.module.css";
import CustomLink from "../CustomLink/CustomLink";
import logoTattoo from '../assets/image/Logotip.jpg'
const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.content}>
            <CustomLink to='/'><img className={classes.logo} src={logoTattoo}/></CustomLink>
            <nav className={classes.nav}>
                <CustomLink to='/'>ГЛАВНАЯ</CustomLink>
                <CustomLink to='/masters'>МАСТЕРА</CustomLink>
                <CustomLink to='/services'>УСЛУГИ</CustomLink>
                <CustomLink to='/works'>НАШИ РАБОТЫ</CustomLink>
                <CustomLink to='/comments'>ОТЗЫВЫ</CustomLink>
                <CustomLink to='/contact'>КОНТАКТЫ</CustomLink>
            </nav>
            </div>
        </div>
    );
};

export default Header;