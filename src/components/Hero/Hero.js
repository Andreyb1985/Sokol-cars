import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css'
import SelfCarSvg from '../icons/SelfCar';
import FlagDE from '../icons/FlagDE';
import FlagUSA from '../icons/FlagUSA';
import ExpCarSvg from '../icons/ExpCar';
import ArrRight from '../icons/ArrRight';
import { useTranslations } from 'next-intl';


const Layout = () => {
    const t = useTranslations('Hero');
    return (
        <>
            <h1 className={s.title}>{t('Hero-1')}</h1>
            <div className={s.buttonContainer}>
                
                <div className={s.byuCarBtn}>
                        <a href="/services/usa">
                            <FlagUSA className={s.carSvg}/>
                            <h2>
                            {t('Hero-2')}
                                <ArrRight className={s.arr}
                                />
                            </h2>
                            <p>
                            {t('Hero-3')}
                            </p>
                        </a>
                </div>
                
                <div className={s.byuCarBtn}>
                    <a href="/services/de">
                        <FlagDE className={s.carSvg}/>
                        <h2>{t('Hero-4')}
                            <ArrRight className={s.arr}/>
                        </h2>
                        <p>{t('Hero-5')}</p>
                    </a>
                </div> 
            </div> 
        </>
    )
};

export default Layout;