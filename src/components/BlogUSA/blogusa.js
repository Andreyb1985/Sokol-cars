'use client'
import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Accordion} from "@nextui-org/accordion";
import {AccordionItem} from "@nextui-org/accordion";
import s from "./Blog.module.css";

export default function BlogUSA() {
  const defaultContent =
  "1.Цена покупки автомобиля ниже, чем в Украине на 15-20%\n2.Прозрачная история авто, данные из CarFax"
  const Content1 =
  "Стоимость доставки меняется достаточно динамически в зависимости от экнономической и политической ситуации. Для примера стоимость доставки в порт Клайпеды:\n -Флорида,Маями = 1300 дол\n -Нью-Йорк, Лонг Айленд = 1200 дол,\n -Джорджия, Саванна = 1000 дол,\n -Клифорния, Лос-Анджелес = 1700 дол,\n -Техас, Хьюстон = 1300 дол,\n -Южная Каролина, Северный Чарльстон = 1000 дол"
  const Content2 =
  "Стоимость доставки зависит от города доставки в Украине. В среднем это во Львов- 850 дол и в Киев - 950 дол"
  const Content3 =
  "Все автомобили застрахованы от дополнительных поврежедений в процессе доставки. Стоимость страховки = 1%, франшиза 100 дол. Автомобиль страхуется по фотографиям из аукциона"
  const Content4 =
  "Наиболее выгодными являются авто американского рынка и авто предназначенные для рынка США, такие как Тойота, Лексус, Хонда, Хюндай, VW, BMW"

  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem  classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="1" aria-label="Совет первый" title="Почему выгодно покупать автомобили из США?">
          {defaultContent}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="2" aria-label="Совет второй" title="Какая cтоимость доставки авто из США в порт Клайпеды?">
          {Content1}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="3" aria-label="Совет третий" title="Какая стоимость доставки из порта Клайпеда в Украину?">
          {Content2}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="4" aria-label="Совет четвертый" title="Застрахован ли автомобиль?">
          {Content3}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="5" aria-label="Совет пятый" title="Какие автомобили выгодно покупать в США?">
          {Content4}
        </AccordionItem>
      </Accordion>
    </>

  );
}
