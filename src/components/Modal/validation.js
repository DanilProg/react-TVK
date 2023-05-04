export const phoneValidation = (phone, setPhoneError) => {
    if (phone.length) {
        if (phone.slice(0, 2) === '89') {
            if (phone.length === 11) {
                return ''
            }if(phone.length > 11){
                return 'Номер некорректный'
            }
            else {
                return  'Номер некорректный'
            }
        }
        if (phone.slice(0, 3) === '+79') {
            if (phone.length === 12) {
                return ''
            } else {
                return 'Номер некорректный'
            }
        }
        if (phone){
           return  'Номер некорректный'
        }
    } else {
        return  'Обязательное поле'
    }
}