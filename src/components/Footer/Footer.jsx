import React from 'react';
import classes from "./footer.module.css";
import CustomLink from "../CustomLink/CustomLink";
import logoTattoo from '../assets/image/Logotip.jpg'
import {Link, NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
const Footer = ({ active, setActive}) => {
    return (
        <div className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.header}>
                    <CustomLink to='/'><img className={classes.logo} src={logoTattoo}/></CustomLink>
                    <a className={classes.number} href='tel: +79236148911'>+7 (923) 614-89-11</a>
                </div>
                <div className={classes.inner}>
                    <h3 className={classes.title}>"TVK Tattoo Club"</h3>
                    <p className={classes.text}>Тату салон, Юрга Ул. МАКСИМЕНКО 24</p>
                        <button
                            className='btn'
                            onClick={() => setActive(!active)}
                        >Запись онлайн <span className="flare"></span></button>

                    <p className={classes.text}>Ограничение по возрасту 18+</p>
                </div>
                <div className={classes.nav}>
                    <Link className={classes.link} to='/'>НА ГЛАВНУЮ</Link>
                    <Link className={classes.link} to='/create-tattoo'>СДЕЛАТЬ ТАТУ</Link>
                    <Link className={classes.link} to='/delete-tattoo'>УДАЛИТЬ ТАТУ</Link>
                    <Link className={classes.link} to='/pirsing'>ПИРСИНГ</Link>
                    <Link className={classes.link} to='/tatyaj'>ТАТУАЖ</Link>
                </div>
            </div>
            {active ?
                <Modal active={active} setActive={setActive}/>
                :
                ''
            }
        </div>
    );
};

export default Footer;