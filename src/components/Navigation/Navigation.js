import React from 'react';
import s from "./Navigation.module.css";
import {Link} from '@/navigation';

const Navigation = ({ navigationConfig = [] }) => {
    return (
        <nav>
            <ul className={s.menuList}>
                {navigationConfig.map(({ link, title } = {}) => <li key={title}><Link href={link}>{title}</Link></li>)}
            </ul>
        </nav>
    );
};

export default Navigation;
