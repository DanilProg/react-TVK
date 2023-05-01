import React from 'react';

const CreateTattoo = () => {
    return (
        <div className='service__content'>
            <h1 className='service__title'>Сделать тату</h1>
            <div style={{
                display: 'flex',
                justifyContent:'space-between'
            }}>
                <div>
                    <p className='service__text'>Хотите сделать тату? </p>
                    <br/>
                    <p className='service__text'>Свяжитесь с нами любым удобным Вам способом, мы найдем решение.</p>
                    <br/>
                    <p className='service__text'>Сделать тату в студии «TVK» – это целый спектр услуг:</p>
                    <br/>
                    <ul>
                        <li>разработка индивидуального эскиза</li>
                        <li>консультация по стилям и направлениям тату</li>
                        <li>подбор оптимального решения, на основе опыта и знаний мастера</li>
                        <li>гибкое ценовое решение под Ваши задачи</li>
                        <li>гибкая система оплаты (рассрочка, кредит)</li>
                        <li> комфортная, современная студия</li>
                        <li>мастера татуировщики-художники</li>
                        <li>изумительная и шикарная татуировка</li>
                        <li>консультация по уходу</li>
                    </ul>
                </div>

                <div>
                    <img src={'https://sun4-4.userapi.com/impg/c855128/v855128828/1b3ec7/xxYUC4f9W4Y.jpg?size=510x527&quality=96&sign=fdde21eb234a447783e087415dd09e21&type=album'}/>
                </div>

            </div>
            <br/>
           <p className='service__text'>У нас есть опыт, знания, возможности, оборудование. Есть все, чтобы Вы сделали тату, и она Вас радовала бесконечно. Посмотрите на наши работы на сайте. И это при условии, что фотографии, к сожалению, не передают всей красоты работы мастера.</p>
            <br/>
            <p className='service__text'>Звоните, пишите, администраторы ответят на все вопросы.</p>
            <br/>
        </div>
    );
};

export default CreateTattoo;