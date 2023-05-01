import axios from "axios";
import {api} from "../api/api";
const TOKEN = '5993869459:AAGp-JUqJ8CwF9LQSiFskdq9AWV5y2rGa1E'
const CHAT_ID = '-1001935542586'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`



export function sendForm (e, name, value, selected)  {
    e.preventDefault()
    api.post('bot', {name: name, value: value, select:selected})
/*    let message = `<b>Заявка с сайта ТВК</b>\n>`
    message += `<b>Имя того, кто отправил: </b> ${name}\n>`
    message += `<b>Email: </b> ${value}\n>`
    message += `<b>Процедура: </b> ${select}>`
    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })*/

}
