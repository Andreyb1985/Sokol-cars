import PrimaryButton from "./primary-button";
import styles from "./pricing-card.module.css";

const PricingCard = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.spacers} />
      <div className={styles.pricingCardInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.squarepaperPlaneParent}>
              <img
                className={styles.squarepaperPlaneIcon}
                alt=""
                src="/squarepaper-plane.svg"
              />
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/group-39506.svg"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.subtitleParent}>
                <div className={styles.subtitle}>Для бизнеса</div>
                <b className={styles.price}>Оптовый</b>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.p}>Предложение для диллеров</p>
            <p className={styles.p1}>и оптовых клиентов.</p>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.spacersWrapper}>
          <div className={styles.spacers1} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.priceParent}>
            <b className={styles.price1}>50 Euro</b>
            <div className={styles.frameprice}>
              <b className={styles.text200}>Что включено</b>
              <div className={styles.px}>
                <div className={styles.iconsListItem}>
                  <div className={styles.listItem200}>
                    <input
                      className={styles.filledIconscheckCircle}
                      type="radio" checked
                    />
                    <div className={styles.text2001}>
                      Покупка Авто на аукционе
                    </div>
                  </div>
                </div>
                <div className={styles.iconsListItem1}>
                  <div className={styles.listItem2001}>
                    <input
                      className={styles.filledIconscheckCircle1}
                      type="radio" checked
                    />
                    <div className={styles.text2002}>Страховка авто</div>
                  </div>
                </div>
                <div className={styles.framelistitem}>
                  <div className={styles.iconsListItem2}>
                    <div className={styles.listItem2002}>
                      <input
                        className={styles.filledIconscheckCircle2}
                        type="radio" checked
                      />
                      <div className={styles.text2003}>
                        Проверка авто перед покупкой
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textlist}>
                  <div className={styles.iconsListItem3}>
                    <div className={styles.listItem2003}>
                      <input
                        className={styles.filledIconscheckCircle3}
                        type="radio" checked
                      />
                      <div className={styles.text2004}>
                        Фото из порта в США и Клайпеды
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PrimaryButton
            propWidth="unset"
            propAlignSelf="stretch"
            propBackgroundColor="#384be8"
            propColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
