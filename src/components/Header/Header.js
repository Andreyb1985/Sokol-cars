import React from 'react';
import Logo from '@/components/Logo';
import Contacts from '@/components/Contacts';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={s.backdrop} />
            <div className={s.headerContainer}>

              <Logo/>
              <Contacts/>
          </div>
      </header>
    );
};

export default Header;
