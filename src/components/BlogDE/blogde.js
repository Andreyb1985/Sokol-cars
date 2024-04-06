'use client'
import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Accordion} from "@nextui-org/accordion";
import {AccordionItem} from "@nextui-org/accordion";
import s from "./Blog.module.css";
import { useTranslations } from 'next-intl';

export default function BlogDE() {
  const t = useTranslations('BlogDe');

  return (
    <>
      <Accordion variant="splitted" isCompact="True">
        <AccordionItem  classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="1" aria-label="Совет первый" title={t('content1-title')}>
          {t('content1')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="2" aria-label="Совет второй" title={t('content2-title')}>
          {t('content2')}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="3" aria-label="Совет третий" title={t('content3-title')}>
          {t('content3')}
        </AccordionItem>
      </Accordion>
    </>

  );
}
