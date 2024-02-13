import React from 'react';
import Image from "next/image";
import logo from "@/images/logo.png";
import mustang from '@/images/mustang.png';
import jeep from '@/images/jeep.jpg';
import ford from '@/images/ford.jpg';
import volkswagen from '@/images/volkswagen.jpg';
import fordEscape from '@/images/ford_escape.jpg';
import audi from '@/images/audi.jpg';
import { Play, ArrRightBlue } from '@/components/icons';

import s from './Stories.module.css';

const Stories = () => {
    return (
        <div className={s.bgContainer}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Реальные истории наших клиентов</h2>
                <a href="/lackystory" className={s.allStories}>Все истории <ArrRightBlue className={s.sectionArrSvg} /></a>
                <ul className={s.storiesList}>
                    <li className={s.storiesItem}>
                        <Image src={mustang} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Ford Mustang 5.0 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={jeep} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>BMW 5 F10 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={ford} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>BMW X5 F15 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={volkswagen} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Audi Q5 PREMIUM 2016 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={fordEscape} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Dodge Challenger <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={audi} className={s.image} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>BMW 5 G30 <Play /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Stories;
