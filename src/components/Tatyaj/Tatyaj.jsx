import React from 'react';

const Tatyaj = () => {
    return (
        <div className='service__content'>
            <h1 className='service__title'>Татуаж, перманентный макияж</h1>
            <div style={{
                display: 'flex',
                justifyContent:'space-between'
            }}>
                <div>
                    <p className='service__text'>Перманентный макияж, татуаж — на сегодняшний день имеет повышенный спрос, так как освобождает от надобности ежедневного нарисовывания глаз, бровей, губ.</p>
                    <br/>
                    <p className='service__text'>Качественный татуаж пропадает в среднем через полтора года, а сделанный татуировочной краской- очень часто приходится удалять.</p>
                    <br/>
                    <p  className='service__text'>Ценовая политика очень сильно разбросана и зависит она не только от качества используемых материалов, места и условий где работает мастер, но и конечно от профессионализма мастера и гарантий которые он дает. Угадать с мастером очень сложно, так как каждый «кричит» что он профи и все будет хорошо. Но полагаться на это вряд ли стоит)

                    </p>
                    <br/>
                    <p  className='service__text'>Студия TVK дает гарантии на все виды работ своих мастеров.</p>
                </div>

                <div>
                    <img src={'https://tattoostation.ru/upload/resize_cache/iblock/cfa/800_1000_1/cfa7251c6ea1bc8e3dd412061d72c89f.jpg'} style={{marginBottom: '150px', height:'450px'}}/>
                </div>
            </div>
        </div>
    );
};

export default Tatyaj;