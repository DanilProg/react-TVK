import React, {useState} from 'react';
import classes from "./modal.module.css";
import axios from "axios";
import close from '../assets/image/close-circle-svgrepo-com.svg'
import {options} from "./optionsSelect";
import Select from "react-select";
import {phoneValidation} from "./validation";

const TOKEN = '5993869459:AAGp-JUqJ8CwF9LQSiFskdq9AWV5y2rGa1E'
const chat_id = '-1001935542586'
const uri_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const Modal = ({active, setActive}) => {
    const [name, setName] = useState('')
    const [errorName, setErrorName] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [select, setSelect] = useState('')
    const [errorSelect, setErrorSelect] = useState('')
    const [text, setText] = useState('')

    const windowsClose = () => {
        setActive(!active)
    }
    const sendFormTelegram = async (e) => {
        e.preventDefault()
        setPhoneError('')
        setErrorName('')
        setErrorSelect('')
        const valueError = phoneValidation(phone, setPhoneError)
        if(valueError){
            setPhoneError(valueError)
            return setPhoneError(valueError)
        }
        if (select){
             setErrorName('')
        }else {
            return setErrorSelect('Обязательное поле')
        }
        if(name.length > 2){
             setErrorName('')
        }else {
            return setErrorName('Обязательное поле')
        }
        try {
            let message = `<b>Заявка с сайта TVK</b>\n>`
            message += `<b>Имя заказчика: </b> ${name}\n>`
            message += `<b>Телефон: </b> ${phone}\n>`
            if (select.value === 'Своя услуга') {
                message += `<b>Услуга: </b> ${select.value}\n>`
                message += `<b>Описание услуги: </b> ${text}`
            } else {
                message += `<b>Услуга: </b> ${select.value}\n`
            }
/*                        await axios.post(uri_api, {
                            chat_id: chat_id,
                            parse_mode: 'html',
                            text: message
                        })*/
            setActive(!active)
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
            {errorName ? <div style={{color: 'red', position:'absolute', top:'30px'}}>{errorName}</div> : ''}
            <input
                required={true}
                className={classes.input}
                style={{marginTop: '55px'}}
                placeholder='Имя'
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {phoneError ? <div style={{color: 'red'}}>{phoneError}</div> : ''}
            <input
                className={classes.input}
                placeholder='Номер телефона'
                type='tel'
                name='tel'
                maxLength={12}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^+\d]/g, ""))}
            />
            {errorSelect ? <div style={{color: 'red'}}>{errorSelect}</div> : ''}
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
/*
/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/*/
