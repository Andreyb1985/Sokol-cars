'use client'
import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Accordion} from "@nextui-org/accordion";
import {AccordionItem} from "@nextui-org/accordion";
import s from "./Blog.module.css";

export default function Blog() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const Content1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const Content2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem  classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="1" aria-label="Совет первый" title="Совет первый">
          {defaultContent}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="2" aria-label="Совет второй" title="Совет второй">
          {Content1}
        </AccordionItem>
        <AccordionItem classNames={{base: s.itemBase, title: s.itemText, indicator: s.itemIndicator, content: s.itemText}} key="3" aria-label="Совет третий" title="Совет третий">
          {Content2}
        </AccordionItem>
      </Accordion>
    </>

  );
}
