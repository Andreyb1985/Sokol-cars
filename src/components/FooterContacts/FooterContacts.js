import React from 'react';
import MobileSvg from "@/components/icons/Mobile";
import s from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <address className={s.contactsContainer}>
                  <MobileSvg />
                  <div className={s.telContainer}>
                      <a href="https://api.whatsapp.com/send?phone=380504111721">+380504111721</a>
                      <a href="tel:+491754068143">+491754068143</a>
                      <button className={s.telBtn}>обратный звонок</button>
                      <button className={s.telBtn}>показать все номера</button>
                  </div>
        </address>
    );
};

export default FooterContacts;