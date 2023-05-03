import React, {useState} from 'react';
import classes from "./modal.module.css";
import axios from "axios";
import close from '../assets/image/close-circle-svgrepo-com.svg'
const TOKEN = '5993869459:AAGp-JUqJ8CwF9LQSiFskdq9AWV5y2rGa1E'
const chat_id = '-1001935542586'
const uri_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const Modal = ({active, setActive}) => {
    const windowsClose = () => {
      setActive(!active)
    }
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [select, setSelect] = useState('')

    const sendFormTelegram = async (e) => {
        setActive(!active)
        e.preventDefault()
        try {
            let message = `<b>Заявка с сайта ТВК</b>\n>`
            message += `<b>Имя заказчика: </b> ${name}\n>`
            message += `<b>Телефон: </b> ${value}\n>`
            message += `<b>Услуга: </b> ${select}`
            await axios.post(uri_api, {
                chat_id: chat_id,
                parse_mode: 'html',
                text: message
            })
        }catch (e) {
            console.log(e)
        }
    }
    return (

            <form
                className={classes.form}
                onClick={(e) => e.stopPropagation()}
                >
                <button
                    type='submit'
                    onClick={() => windowsClose()}
                ><img src={close} className='btn-close'/></button>
                <input
                    className={classes.input}
                    style={{marginTop: '55px'}}
                    placeholder='Имя'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={classes.input}
                    placeholder='Номер телефона'
                    type='phone'
                    name='phone'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select  className={classes.selected} value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option></option>
                    <option value={'Сделать тату'}>Сделать тату</option>
                    <option value={'Удалить тату'}>Удалить тату</option>
                    <option value={'Пирсинг'}>Пирсинг</option>
                    <option value={'Татуаж'}>Татуаж</option>
                </select>
                <button
                    type='submit'
                    className='btn btn-modal'
                    onClick={(e) => sendFormTelegram(e)}
                    >Отправить</button>
            </form>
    );
};

export default Modal;

