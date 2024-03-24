import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css'
import SelfCarSvg from '../icons/SelfCar';
import FlagDE from '../icons/FlagDE';
import FlagUSA from '../icons/FlagUSA';
import ExpCarSvg from '../icons/ExpCar';
import ArrRight from '../icons/ArrRight'

const Layout = () => {
    return (
        <>
            <h1 className={s.title}>Автомобиль мечты из США и Германии </h1>
            <div className={s.buttonContainer}>
                
                <div className={s.byuCarBtn}>
                        <a href="/services/usa">
                            <FlagUSA className={s.carSvg}/>
                            <h2>
                                Авто из США
                                <ArrRight className={s.arr}
                                />
                            </h2>
                            <p>
                                Доступная цена и широкий выбор автоиобилей
                            </p>
                        </a>
                </div>
                
                <div className={s.byuCarBtn}>
                    <a href="/services/de">
                        <FlagDE className={s.carSvg}/>
                        <h2>Авто из Германии
                            <ArrRight className={s.arr}/>
                        </h2>
                        <p>Быстрая доставка и немецкое качество</p>
                    </a>
                </div> 
            </div> 
        </>
    )
};

export default Layout;