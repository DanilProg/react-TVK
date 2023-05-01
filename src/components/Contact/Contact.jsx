import React from 'react';
import classes from "./contact.module.css";
import {Link} from "react-router-dom";
import vk from '../assets/image/vk-1-logo-svgrepo-com.svg'
import youtube from '../assets/image/youtube-color-svgrepo-com.svg'
import insta from '../assets/image/instagram-color-svgrepo-com.svg'
const Contact = () => {
    return (
        <div className={classes.contact}>
            <h1 className='title'>Контактная информация "TVK" Club.</h1>
            <div className={classes.modal}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A63f226113ff370334ed413976674ceb625e0f816e50a60d54ed559c5c36a4e0b&amp;source=constructor"
                    width="650" height="500" frameBorder="0"/>
                <div className={classes.modal__inner}>
                    <h3 style={{textAlign: "center", fontSize: '20px'}}>Наш адрес</h3>
                    <p className={classes.text}>Работа в  тату салоне происходит по предварительной записи:</p>
                    <p style={{marginBottom:'15px'}}><b>Тел.</b> <span  className={classes.text}>+7 (923) 614-89-11</span><br/></p>
                    <p style={{marginBottom:'15px'}}><b>Наш адрес:</b><span  className={classes.text}>г. Юрга Ул. МАКСИМЕНКО 24</span><br/></p>
                    <p style={{marginBottom:'15px'}}><b>Часы работы:</b><span  className={classes.text}>пн-пт 10:00–18:00, сб 10:00–17:00</span><br/></p>



                    <div style={{display:"flex", alignItems:"center"}}>
                        <span className={classes.text}>Мы в соцсетях:</span>
                        <Link to='https://vk.com/tvktattooclub' target='_blank'><img src={vk} style={{width:'50px', height: '25px'}}/></Link>
                        <Link to='https://www.youtube.com/channel/UCzM7UKnSkKZpAQCKoJzZAPQ?view_as=subscriber' target='_blank'><img src={youtube}  style={{width:'50px', height: '25px'}}/></Link>
                        <Link to='https://www.instagram.com/vadicktattoo/' target='_blank'><img src={insta}  style={{width:'50px', height: '25px'}}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;