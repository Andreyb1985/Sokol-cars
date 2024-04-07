import MessagesBox from "@/components/Aboutus/messages-box";
import styles from "./index.module.css";
import Layout from '@/components/Layout';
import './global.css';
import QuestionAUS from '@/components/QuestionAUS';
import { useTranslations } from 'next-intl';


const Page = () => {
  const t = useTranslations('AboutUs');
  return (
    <div className='root'>
    <Layout>
    <div className={styles.div}>
      <main className={styles.containerParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsTextParent}>
            <div className={styles.aboutUsText}>
              <h1 className={styles.h1}>{t('AboutUs8')}</h1>
              <div className={styles.haveAProject}>
              {t('AboutUs9')}
              </div>
            </div>
            <div className={styles.messagesBoxFrame}>
              <h3 className={styles.h3}>{t('AboutUs10')}</h3>
              <div className={styles.phoneNumberTextBox}>
                <div className={styles.emailTextBox}>
                  <div className={styles.containerIcon1} />
                  <b className={styles.b}>{t('AboutUs12')} <a href= "https://api.whatsapp.com/send?phone=380504111721">+380504111721</a> </b>
                </div>
                <div className={styles.emailTextBox1}>
                  <div className={styles.containerIcon2} />
                  <b className={styles.hellostudioco}>{t('AboutUs11')} <a href="mailto:andriibakanov@gmail.com">andriibakanov@gmail.com</a></b>
                </div>
                <div className={styles.emailTextBox2}>
                  <div className={styles.containerIcon3} />
                  <b className={styles.b1}>{t('AboutUs13')}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuestionAUS/>
      </main>
    </div>
    </Layout>
    </div>
  );
};

export default Page;
