import React from 'react';
import MobileSvg from "@/components/icons/Mobile";
import s from "./Contacts.module.css";

const Contacts = () => {
    return (
        <address className={s.contactsContainer}>
                  <MobileSvg />
                  <div className={s.telContainer}>
                      <a href="tel:+380442055977">+380504111721b</a>
                      <button className={s.telBtn}>обратный звонок</button>
                      <button className={s.telBtn}>показать все номера</button>
                  </div>
        </address>
    );
};

export default Contacts;