'use client'
import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Accordion} from "@nextui-org/accordion";
import {AccordionItem} from "@nextui-org/accordion";
import s from "./Blog.module.css";
import { useTranslations } from 'next-intl';

export default function BlogUSA() {
  const t = useTranslations('BlogUSA');
  
  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem  classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="1" aria-label="Совет первый" title={t('content1-title')}>
        {t('content1')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="2" aria-label="Совет второй" title={t('content2-title')}>
        {t('content2')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="3" aria-label="Совет третий" title={t('content3-title')}>
        {t('content3')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="4" aria-label="Совет четвертый" title={t('content4-title')}>
        {t('content4')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="5" aria-label="Совет пятый" title={t('content5-title')}>
        {t('content5')}
        </AccordionItem>
      </Accordion>
    </>

  );
}
