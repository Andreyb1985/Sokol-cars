import React from 'react';
import s from "./FooterNavigation.module.css";
import {Link} from '@/navigation';
import { useTranslations } from 'next-intl';


// const FooterNavigation = ({navigationConfig}) => {
//     const t = useTranslations('navigation');
//     return (
//         <nav>
//             <ul className={s.menuList}>
//                 {navigationConfig.map(({ link, titleTranslationKey } = {}) => <li key={titleTranslationKey}><Link href={link}>{titleTranslationKey}</Link></li>)}
//             </ul>
//         </nav>
//     );
// };
const FooterNavigation = ({navigationConfig}) => {
    const t = useTranslations('navigation');
    // const navigationConfig = [
    //     {
    //         //title: t('aboutcompany'),
    //         link: '/',
    //     },
    //     {
    //         title: 'Удачные истории',
    //         link: '/lackystory',
    //     },
    //     // {
    //     //     title: 'Каталог Авто',
    //     //     link: '/',
    //     // },
    //     {
    //         title: 'Авто из США',
    //         link: '/services/usa',
    //     },
    //     {
    //         title: 'Авто из Германии',
    //         link: '/services/de',
    //     },
    //     {
    //         title: 'Частые вопросы',
    //         link: '/blog',
    //     },
    //     {
    //         title: 'Контакты',
    //         link: '/aboutus',
    //     },
    // ];
    return (
        <nav>
            <ul className={s.menuList}>
                {navigationConfig.map(({ link, titleTranslationKey } = {}) => <li key={titleTranslationKey}><Link href={link}>{t(titleTranslationKey)}</Link></li>)}
            </ul>
        </nav>
    );
};

export default FooterNavigation;