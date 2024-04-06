// 'use client'
import {useLocale, useTranslations} from 'next-intl';
import {locales} from '@/config';
import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
// import { Select, SelectItem } from '@nextui-org/react';

// import s from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  // return (
  //   <div className={s.selectWrapper}>
  //     <Select
  //       // labelPlacement={placement}
  //       label="Favorite Animal"
  //       variant="faded"
  //       // className="max-w-xs"
  //     >
  //       {locales.map((cur) => (
  //         <SelectItem key={cur} value={cur}>
  //           {t('locale', {locale: cur})}
  //         </SelectItem>
  //       ))}
  //     </Select>
  //   </div>
  // )
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
