import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css'
import SelfCarSvg from '../icons/SelfCar';
import ExpCarSvg from '../icons/ExpCar';
import ArrRight from '../icons/ArrRight'

const Layout = () => {
    return (
        <>
            <h1 className={s.title}>Самостоятельная покупка и доставка авто из США</h1>
            <div className={s.buttonContainer}>
                
                <div className={s.byuCarBtn}>
                        <a href="/services/usa">
                            <SelfCarSvg className={s.carSvg}/>
                            <h2>
                                Авто из США
                                <ArrRight className={s.arr}
                                />
                            </h2>
                            <p>
                                Оптимальная цена на рынке
                            </p>
                        </a>
                </div>
                
                <div className={s.byuCarBtn}>
                    <a href="/services/de">
                        <ExpCarSvg className={s.carSvg}/>
                        <h2>Авто из Германии
                            <ArrRight className={s.arr}/>
                        </h2>
                        <p>Обратитесь к нашим экспертам — они помогут выбрать автомобиль под ваши желания и бюджет...</p>
                    </a>
                </div> 
            </div> 
        </>
    )
};

export default Layout;