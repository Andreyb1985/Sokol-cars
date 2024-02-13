import Px from "./px";
import PrimaryButton from "./primary-button";
import styles from "./pricing-card1.module.css";

const PricingCard1 = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.spacers} />
      <div className={styles.frameRootFrame}>
        <div className={styles.squarePaperPlaneEllipses}>
          <div className={styles.fRAME}>
            <div className={styles.squarePaperPlane}>
              <div className={styles.squarePaperPlaneChild} />
              <div className={styles.squarepaperPlaneParent}>
                <img
                  className={styles.squarepaperPlaneIcon}
                  loading="eager"
                  alt=""
                  src="/squarepaper-plane.svg"
                />
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.subtitleFrame}>
              <div className={styles.priceText}>
                <div className={styles.subtitle}>Для опытных</div>
                <b className={styles.price}>Базовый</b>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>Осмотр автомобиля по вашему запросу</div>
        </div>
      </div>
      <div className={styles.monthly}>
        <div className={styles.spacer} />
      </div>
      <div className={styles.paragraphLabel}>
        <div className={styles.spacersWrapper}>
          <div className={styles.spacers1} />
        </div>
        <div className={styles.framePrice}>
          <b className={styles.price1}>$250</b>
          <div className={styles.subtitleFrame1}>
            <b className={styles.squarePaperPlane1}>Что включено</b>
            <Px
              filledIconsCheckCName="radioGroup-2"
              text200="Осмотр автомобиля(интерьер и экстерьер)"
              text2001="Компьютерная диагностика автомобиля"
              text2002="Проверка ЛКП прибором"
              pricetext="Фото и видео отчет. Тест драйв"
            />
          </div>
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default PricingCard1;
