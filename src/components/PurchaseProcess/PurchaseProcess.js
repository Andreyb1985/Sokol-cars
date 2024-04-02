import React from 'react';
import s from "./PurchaseProcess.module.css";
import { DoubleArrRight } from '../icons';
import { useTranslations } from 'next-intl';

const PurchaseProcess = () => {
    const t = useTranslations('PurchaseProcess');
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>{t('PurchaseProcess-1')}</h2>
            <ul className={s.algorithmList}>
                <li className={s.algorithmItem}>
                    <span className={s.firstNumber}>1</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-2')}<br/> {t('PurchaseProcess-auto')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-4')}</p>                      
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>2</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-5')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-6')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>3</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-7')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-8')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.fourNumber}>4</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-9')} <br/>{t('PurchaseProcess-auto')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-10')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>5</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-11')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-12')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>6</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcess-13')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcess-14')}</p>
                </li>
            </ul>
        </div>
    );
};

export default PurchaseProcess;