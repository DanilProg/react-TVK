import React from 'react';
import '../Service/service.css'
const Tatyaj = () => {
    return (
        <div className='service__content'>
            <h1 className='service__title'>Татуаж, перманентный макияж</h1>
            <div className='service__inner'>
                <div className='service__text'>
                    <p className='text'>Перманентный макияж, татуаж — на сегодняшний день имеет повышенный спрос, так как освобождает от надобности ежедневного нарисовывания глаз, бровей, губ.</p>
                    <br/>
                    <p className='text'>Качественный татуаж пропадает в среднем через полтора года, а сделанный татуировочной краской- очень часто приходится удалять.</p>
                    <br/>
                    <p  className='text'>Ценовая политика очень сильно разбросана и зависит она не только от качества используемых материалов, места и условий где работает мастер, но и конечно от профессионализма мастера и гарантий которые он дает. Угадать с мастером очень сложно, так как каждый «кричит» что он профи и все будет хорошо. Но полагаться на это вряд ли стоит)

                    </p>
                    <br/>
                    <p  className='text'>Студия TVK дает гарантии на все виды работ своих мастеров.</p>
                </div>

                <div  className='image'>
                    <img className='img image__size' src={'http://klublady.ru/uploads/posts/2022-07/1658311159_21-klublady-ru-p-tatuazh-foto-21.jpg'}/>
                </div>
            </div>
        </div>
    );
};

export default Tatyaj;