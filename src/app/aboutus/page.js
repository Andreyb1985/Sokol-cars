import MessagesBox from "@/components/Aboutus/messages-box";
import styles from "./index.module.css";
import Layout from '@/components/Layout';
import './global.css';

const Page = () => {
  return (
    <div className='root'>
    <Layout>
    <div className={styles.div}>
      <main className={styles.containerParent}>
        <img className={styles.containerIcon} alt="" src="/container.svg" />
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsTextParent}>
            <div className={styles.aboutUsText}>
              <h1 className={styles.h1}>Про нас</h1>
              <div className={styles.haveAProject}>
               Наша Компания занимается поиском и доставкой автомобилей из США и Германии с 2019 года.
               Мы купили клиентам более 100 автомобилей под разные запросы и бюджет.
              </div>
            </div>
            <div className={styles.messagesBoxFrame}>
              <h3 className={styles.h3}>Контактная информация :</h3>
              <div className={styles.phoneNumberTextBox}>
                <div className={styles.emailTextBox}>
                  <div className={styles.containerIcon1} />
                  <b className={styles.b}>Телефонный номер: +491754068143 </b>
                </div>
                <div className={styles.emailTextBox1}>
                  <div className={styles.containerIcon2} />
                  <b className={styles.hellostudioco}>Почта: andriibakanov@gmail.com</b>
                </div>
                <div className={styles.emailTextBox2}>
                  <div className={styles.containerIcon3} />
                  <b className={styles.b1}>Время работы: С 10.00 до 18.00</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MessagesBox />
      </main>
    </div>
    </Layout>
    </div>
  );
};

export default Page;
