'use client'
import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Accordion} from "@nextui-org/accordion";
import {AccordionItem} from "@nextui-org/accordion";
import s from "./Blog.module.css";

export default function BlogDE() {
  const defaultContent =
  "1) Регулярное тех обслуживание на официальных сервисах\n2) Качественно европейское топливо и дороги\n3) Скорость доставки до 2 дней в Украину\n4) Редкие и богатые комплектации автомобилей "
  const Content1 =
  "Автомобили от 30 тыс эвро и электромобили"
  const Content2 =
  "В среднем доставка из Германии в Украину составляет до 1000 эвро"

  return (
    <>
      <Accordion variant="splitted" isCompact="True">
        <AccordionItem  classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="1" aria-label="Совет первый" title="Почему выгодно покупать автомобиль в Германии">
          {defaultContent}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="2" aria-label="Совет второй" title="Кикие автомобили лучше покупать?">
          {Content1}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="3" aria-label="Совет третий" title="Сколько стоит доставка авто из Германии">
          {Content2}
        </AccordionItem>
      </Accordion>
    </>

  );
}
