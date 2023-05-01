import React from 'react';
import classes from "./service.module.css";
import {topQuestions, service} from "./ServiceConst";
import Questions from "./Questions";
import CardService from "./CardService";

const Service = () => {

    return (
        <div className={classes.content}>
            <div className={classes.card__block}>
                {service.map((item) =>
                    <CardService
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    count={item.id}
                    image={item.imgUrl}
                    link={item.link}
                />)}
            </div>
            <h2 className={classes.title}>10 популярных вопросов</h2>
            <ul>
                {topQuestions.map((item) => <Questions key={item.id} title={item.question} text={item.res}/>)}
            </ul>
        </div>
    );
};

export default Service;