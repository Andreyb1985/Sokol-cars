import styles from "./messages-box.module.css";

const MessagesBox = () => {
  return (
    <div className={styles.messagesBox}>
      <div className={styles.container} />
      <div className={styles.nameTextbox}>
        <b className={styles.b}>Имя Фамилия</b>
        <div className={styles.textBox}>
          <div className={styles.textBox1} />
          <input
            className={styles.input}
            placeholder="Введите Ваше Имя и Фамилию"
            type="text"
          />
        </div>
      </div>
      <div className={styles.inputsContainerFrame}>
        <b className={styles.b1}>Телефон</b>
        <div className={styles.textBox2}>
          <div className={styles.textBox3} />
          <input
            className={styles.input1}
            placeholder="Введите Ваш телефон"
            type="text"
          />
        </div>
        <b className={styles.eMail}>@ e-mail</b>
        <div className={styles.textBox4}>
          <div className={styles.textBox5} />
          <input
            className={styles.input2}
            placeholder="Введите вашу почту"
            type="text"
          />
        </div>
        <div className={styles.messageSendText}>
          <b className={styles.b2}>Сообщение</b>
          <textarea
            className={styles.textBox6}
            placeholder="Напишите ваше сообщение"
            rows={8}
            cols={24}
          />
        </div>
      </div>
      <button className={styles.largenormaljustifyactive}>
        <div className={styles.div}>Отослать сообщение</div>
      </button>
    </div>
  );
};

export default MessagesBox;
