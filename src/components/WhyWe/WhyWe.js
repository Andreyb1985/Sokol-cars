import React from 'react';
import { Check } from '../icons';
import { ArrRightBlue } from '../icons';
import s from './WhyWe.module.css';
import { useTranslations } from 'next-intl';


const WhyWe = () => {
    const t = useTranslations('WhyWe');
    return (
        <div className={s.bgContainer}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>{t('WhyWe-1')}</h2>
                <a href="#" className={s.aboutUs}>{t('WhyWe-2')} <ArrRightBlue className={s.arrSvg} /></a>
                <ul className={s.reasonList}>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />{t('WhyWe-3')}</p>
                        <p className={s.reasonDesc}>{t('WhyWe-4')}</p>
                    </li>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />{t('WhyWe-5')}</p>
                        <p className={s.reasonDesc}>{t('WhyWe-6')}</p>
                    </li>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />{t('WhyWe-7')}</p>
                        <p className={s.reasonDesc}>{t('WhyWe-8')}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyWe;