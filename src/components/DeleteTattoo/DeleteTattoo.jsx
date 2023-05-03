import React from 'react';
import '../Service/service.css'
const DeleteTattoo = () => {
    return (
        <div className='service__content'>
            <h1 className='service__title'>Удаление тату лазером</h1>
            <div className='service__inner'>
                <div className='service__text'>
                    <p className='text'>Лазерное удаление татуировок в  Юрге по приемлемой цене у нас, в студии «TVK».</p>
                    <br/>
                    <p className='text'>В вопросах удаления тату важны несколько составляющих:</p>
                    <br/>
                    <ul className='service__list'>
                        <li>современное оборудование отличного качества</li>
                        <li>опыт специалиста</li>
                        <li>перерыв между сеансами удаления татуировки должен составлять не менее 45 дней</li>
                    </ul>
                    <br/>
                    <p  className='service__text'>Все эти моменты чрезвычайно важны и критичны. Именно эти факторы являются основополагающими в вопросе удаления татуировки</p>
                    <br/>
                    <ul  className='service__list'>
                        <li>Современный лазер максимально безболезненно поможет Вам избавиться от надоевшего и неактуального нательного рисунка</li>
                        <li>Опытный мастер настроит оборудование таким образом, чтобы получить максимальный эффект при минимальном травматизме</li>
                        <li>Перерывы между сеансами необходимы для естественного обновления кожного покрова и вывода пигмента. Важно соблюдать рекомендации мастера по удалению татуировок.</li>
                    </ul>
                </div>

                <div className='image'>
                    <img className='img image__size'  src={'https://sun9-66.userapi.com/impg/OXXfLsTU3Ja8B3Xlysy487e3Xmt-_Z1kWJ0CxQ/mRBCkRnLkVg.jpg?size=510x543&quality=96&sign=bf8ff1a715bcf37a222c5bbf6dea7d9c&type=album'}/>
                </div>
            </div>
        </div>
    );
};

export default DeleteTattoo;