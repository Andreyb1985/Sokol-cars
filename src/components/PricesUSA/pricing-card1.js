import Px from "./px";
import PrimaryButton from "./primary-button";
import styles from "./pricing-card1.module.css";
import { useTranslations } from 'next-intl';

const PricingCard1 = () => {
  const t = useTranslations('PricesUSA');
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
                <div className={styles.subtitle}>{t('PricesUSA-for_experts')}</div>
                <b className={styles.price}>{t('PricesUSA-basis')}</b>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>{t('PricesUSA-pokupkazapros')}</div>
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
          <b className={styles.price1}>$200</b>
          <div className={styles.subtitleFrame1}>
            <b className={styles.squarePaperPlane1}>{t('PricesUSA-chto_vklucheno')}</b>
            <Px
              filledIconsCheckCName="radioGroup-2"
              text200={t('PricesUSA-fotoport')}
              text2001={t('PricesUSA-soprovogdenie')}
              text2002={t('PricesUSA-checkcar')}
              pricetext={t('PricesUSA-insurance')}
            />
          </div>
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default PricingCard1;
