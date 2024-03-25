import React from 'react';
import FooterLogo from '@/components/FooterLogo';
import FooterNavigation from '@/components/FooterNavigation';
import FooterContacts from '../FooterContacts';
import s from './Footer.module.css';
import { Facebook, Youtube, Instagram } from '../icons';
import navigationConfig from '@/constants/navigation';


const Footer = () => {
    return (
        <footer className={s.mainFooter}>
            <div className={s.firstsBg}>
                <div className={s.footerContainer}>
                    <div className={s.firstContainer}>
                        <FooterLogo />
                        <ul className={s.socialMedia}>
                            <li><a href='https://www.facebook.com/sokolautos'><Facebook/></a></li>
                            <li><a href='https://www.instagram.com/sokol.autos/'><Instagram/></a></li>
                        </ul>
                    </div>
                    <div className={s.secoundContainer}>
                        <FooterNavigation navigationConfig={navigationConfig}/>
                        <FooterContacts />
                        <address className={s.adress}>
                            <p className={s.adressTitle}>Адрес центрального офиса:</p>
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
                    <p>Copyrirght 2024 &copy; Sokol Car</p>
                    <p className={s.rights}>Все материалы, содержащиеся на сайте, являются интеллектуальной собственностью владельца сайта. Любое полное или частичное копирование материалов сайта
    допускается с обязательным указанием ссылки на этот сайт.  Все права защищены.</p>
                </div>
                </div>

        </footer>
    );
};

export default Footer;
