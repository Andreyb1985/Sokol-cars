import {redirect} from 'next/navigation'

export default function Home({params: {locale}}) {
  redirect(`/sokol-autos-site-2.html?lang=${locale}`)
}
