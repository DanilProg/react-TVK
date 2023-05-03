import React, {useEffect, useState} from 'react';
import classes from "./header.module.css";
import CustomLink from "../CustomLink/CustomLink";
import logoTattoo from '../assets/image/Logotip.jpg'
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleWidht() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidht)
        return () => {
            window.removeEventListener('resize', handleWidht)
        }
    }, [])
    return (
        <div className={classes.header}>
            <div className={classes.content}>
                <BurgerMenu/>
                <CustomLink to='/'><img className={classes.logo} src={logoTattoo}/></CustomLink>
                <nav className={width ? classes.nav : 'none'}>
                    <CustomLink propsClass={classes.links} to='/'>ГЛАВНАЯ</CustomLink>
                    <CustomLink propsClass={classes.links} to='/masters'>МАСТЕРА</CustomLink>
                    <CustomLink propsClass={classes.links} to='/services'>УСЛУГИ</CustomLink>
                    <CustomLink propsClass={classes.links} to='/works'>НАШИ РАБОТЫ</CustomLink>
                    <CustomLink propsClass={classes.links} to='/comments'>ОТЗЫВЫ</CustomLink>
                    <CustomLink propsClass={classes.links} to='/contact'>КОНТАКТЫ</CustomLink>
                </nav>

            </div>
        </div>
    );
};

export default Header;