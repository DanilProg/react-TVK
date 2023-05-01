import React from 'react';

const Pirsing = () => {
    return (
        <div className='service__content'>
            <h1 className='service__title'>Пирсинг</h1>
            <div style={{
                display: 'flex',
                justifyContent:'space-between'
            }}>
                <div>
                    <p className='service__text'>Хотите сделать пирсинг? Нет проблем!   В нашем салоне стерильные и одноразовые инструменты. Опытные   мастера пирсинга осуществят любой прокол максимально   безболезненно.</p>
                    <br/>
                    <p className='service__text'>Мы подробно и бесплатно проконсультируем Вас по таким вопросам,   как:</p>
                    <br/>
                    <ul className='service__list'>
                        <li> уход за проколом: правила, продолжительность, средства</li>
                        <li> подбор украшений пирсинга</li>
                        <li> правила безопасности</li>
                    </ul>

                    <br/>
                </div>

                <div>
                    <img src={'https://tattoostation.ru/upload/iblock/dfe/dfea3e089087e8efc410921fa39fdc50.jpg'} style={{marginBottom: '150px'}}/>
                </div>
            </div>
        </div>
    );
};

export default Pirsing;