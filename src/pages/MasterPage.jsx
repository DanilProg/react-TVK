import React from 'react';
import Master from "../components/Master/Master";
import {masterItem} from "../components/Master/MasterConst";
import classes from "../components/Master/master.module.css";

const MasterPage = () => {
    return (
        <div className='main__title'>
            <h1 className='title'>Наши мастера</h1>
            <div className={classes.content}>
            {
                masterItem.map((item) => <Master key={item.id} name={item.name} text={item.text} image={item.image} jobs={item.jobs} desc={item.description}/>)
            }
            </div>
        </div>
    );
};

export default MasterPage;