import React, {useState} from 'react';
import classes from "./modal.module.css";
import axios from "axios";
import close from '../assets/image/close-circle-svgrepo-com.svg'
import {options} from "./optionsSelect";
import Select from "react-select";

const TOKEN = '5993869459:AAGp-JUqJ8CwF9LQSiFskdq9AWV5y2rGa1E'
const chat_id = '-1001935542586'
const uri_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const Modal = ({active, setActive}) => {
    const windowsClose = () => {
        setActive(!active)
    }
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('Поле телефона не может быть пустым')
    const [select, setSelect] = useState('')
    const [text, setText] = useState('')
   const validPhone = (e) => {
       setPhone(e.target.value)
       const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
       if(!re.test(String(e.target.value).toLowerCase())){
           setPhoneError('Неккоретный номер телефона')
       }else{
           setPhoneError('')
       }
   }
    const sendFormTelegram = async (e) => {
        setActive(!active)
        e.preventDefault()
        try {
            let message = `<b>Заявка с сайта TVK</b>\n>`
            message += `<b>Имя заказчика: </b> ${name}\n>`
            message += `<b>Телефон: </b> ${phone}\n>`
            if (select.value === 'Своя услуга') {
                message += `<b>Услуга: </b> ${select.value}\n>`
                message += `<b>Описание услуги: </b> ${text}`
            }else {
                message += `<b>Услуга: </b> ${select.value}\n`
            }
/*            await axios.post(uri_api, {
                chat_id: chat_id,
                parse_mode: 'html',
                text: message
            })*/
        } catch (e) {
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
            {(phone && phoneError) && <p>{phoneError}</p>}
            <input
                className={classes.input}
                placeholder='Номер телефона'
                type='tel'
                name='tel'
                maxLength={12}
                value={phone}
                onChange={(e) => validPhone(e)}
            />
            <Select
                defaultValue={select}
                onChange={setSelect}
                options={options}
                placeholder='Выберите услугу'
                className={classes.selected}
            />
            {
                select.value === 'Своя услуга'
                    ?
                    <textarea
                        placeholder='Описание услуги'
                        className={classes.selected__text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    :
                    ''
            }

            <button
                type='submit'
                className='btn btn-modal'
                onClick={(e) => sendFormTelegram(e)}
            >Отправить
            </button>
        </form>
    );
};

export default Modal;


/*           <select
                className={classes.selected}
                value={select}
                onChange={(e) => setSelect(e.target.value)}>
<option>Выбрать услугу</option>
<option value={'Сделать тату'}>Сделать тату</option>
<option value={'Удалить тату'}>Удалить тату</option>
<option value={'Пирсинг'}>Пирсинг</option>
<option value={'Татуаж'}>Татуаж</option>
<option value={'Консультация'}>Консультация</option>
<option value={'Своя услга'}>Своя услуга</option>
            </select>*/

/*
*/
