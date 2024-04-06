import React from 'react';
import FooterLogo from '@/components/FooterLogo';
import FooterNavigation from '@/components/FooterNavigation';
import FooterContacts from '../FooterContacts';
import s from './Footer.module.css';
import { Facebook, Youtube, Instagram } from '../icons';
import navigationConfig from '@/constants/navigation';
import { useTranslations } from 'next-intl';
import {Link} from '@/navigation';

const Footer = () => {
    const t = useTranslations('Footer');
    return (
        <footer className={s.mainFooter}>
            <div className={s.firstsBg}>
                <div className={s.footerContainer}>
                    <div className={s.firstContainer}>
                        <FooterLogo />
                        <ul className={s.socialMedia}>
                            <li><Link href='https://www.facebook.com/sokolautos'><Facebook/></Link></li>
                            <li><Link href='https://www.instagram.com/sokol.autos/'><Instagram/></Link></li>
                        </ul>
                    </div>
                    <div className={s.secoundContainer}>
                        <FooterNavigation navigationConfig={navigationConfig}/>
                        <FooterContacts />
                        <address className={s.adress}>
                            <p className={s.adressTitle}>{t('address')}</p>
                            <p className={s.adressDesc}>45141, Essen,Große Leining 22</p>
                        </address>
                    </div>
                </div>
            </div>
            <div className={s.secoundBg}>
                <div className={s.copyrirghtContainer}>
                    <ul className={s.copyrirghtList}>
                        <li><a>Правила пользования</a></li>
                        <li><a>Политика конфиденциальности</a></li>
                        <li><a>Карта сайта</a></li>
                    </ul>
                    <p>Copyrirght 2024 &copy; Sokol Auto</p>
                    <p className={s.rights}>{t('address')}</p>
                </div>
                </div>

        </footer>
    );
};

export default Footer;
