'use client';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {useRouter, usePathname} from '@/navigation';
import s from "./LocaleSwitcherSelect.module.css";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className={s.selectWrapper}>
      <select
        className={s.select}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </div>
  );
}
