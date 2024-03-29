import MessagesBox from "@/components/Aboutus/messages-box";
import styles from "./index.module.css";
import Layout from '@/components/Layout';
import './global.css';
import QuestionAUS from '@/components/QuestionAUS';


const Page = () => {
  return (
    <div className='root'>
    <Layout>
    <div className={styles.div}>
      <main className={styles.containerParent}>
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
                  <b className={styles.b}>Телефонный номер: <a href= "https://api.whatsapp.com/send?phone=380504111721">+380504111721</a> </b>
                </div>
                <div className={styles.emailTextBox1}>
                  <div className={styles.containerIcon2} />
                  <b className={styles.hellostudioco}>Почта: <a href="mailto:andriibakanov@gmail.com">andriibakanov@gmail.com</a></b>
                </div>
                <div className={styles.emailTextBox2}>
                  <div className={styles.containerIcon3} />
                  <b className={styles.b1}>Время работы: С 10.00 до 18.00</b>
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
