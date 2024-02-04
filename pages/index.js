import { useRouter } from 'next/router'
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PurchaseProcess from '@/components/PurchaseProcess';
import PurchaseProcessDe from '@/components/PurchaseProcessDe';
import WhyWe from '@/components/WhyWe';
import OurServices from '@/components/OurServices';
import Stories from '@/components/Stories';
import Questions from '@/components/Questions'


export default function Home() {
const router = useRouter();
  return (
    <div className='root'>
      <Layout nodesUnderBg={<Hero />}>
        <PurchaseProcess />
        <PurchaseProcessDe />
        <WhyWe />
        <OurServices />
        <Stories />
        <Questions/>
      </Layout>
    </div>
  )
}
