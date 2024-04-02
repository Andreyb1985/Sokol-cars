import React from 'react';
import s from "./PurchaseProcessDe.module.css";
import { DoubleArrRight } from '../icons';
import { useTranslations } from 'next-intl';

const PurchaseProcessDe = () => {
    const t = useTranslations('PurchaseProcessDe');
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>{t('PurchaseProcessDe-1')}</h2>
            <ul className={s.algorithmList}>
                <li className={s.algorithmItem}>
                    <span className={s.firstNumber}>1</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcessDe-2')}<br/> {t('PurchaseProcessDe-auto')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcessDe-4')}</p>                      
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>2</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcessDe-5')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcessDe-6')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>3</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcessDe-7')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcessDe-8')}</p>                    
                </li>
                {/* <li className={s.algorithmItem}>
                    <span className={s.fourNumber}>4</span>
                    <p className={s.algorithmTitle}>Ремонт <br/> авто</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Комплексный ремонт на СТО нашего партнера</p>                    
                </li> */}
                <li className={s.algorithmItem}>
                    <span className={s.number}>4</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcessDe-11')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcessDe-12')}</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>5</span>
                    <p className={s.algorithmTitle}>{t('PurchaseProcessDe-13')}</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>{t('PurchaseProcessDe-14')}</p>
                </li>
            </ul>
        </div>
    );
};

export default PurchaseProcessDe;