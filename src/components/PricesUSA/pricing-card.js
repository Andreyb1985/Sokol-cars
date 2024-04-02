import PrimaryButton from "./primary-button";
import styles from "./pricing-card.module.css";
import { useTranslations } from 'next-intl';

const PricingCard = () => {
  const t = useTranslations('PricesUSA');
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
                <div className={styles.subtitle}>{t('PricesUSA-busines')}</div>
                <b className={styles.price}>{t('PricesUSA-opt')}</b>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.p}>{t('PricesUSA-fordealers')}</p>
            <p className={styles.p1}>{t('PricesUSA-foropt')}</p>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.spacersWrapper}>
          <div className={styles.spacers1} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.priceParent}>
            <b className={styles.price1}>$100</b>
            <div className={styles.frameprice}>
              <b className={styles.text200}>{t('PricesUSA-chto_vklucheno')}</b>
              <div className={styles.px}>
                <div className={styles.iconsListItem}>
                  <div className={styles.listItem200}>
                    <input
                      className={styles.filledIconscheckCircle}
                      type="radio" checked
                    />
                    <div className={styles.text2001}>
                    {t('PricesUSA-buycar')}
                    </div>
                  </div>
                </div>
                <div className={styles.iconsListItem1}>
                  <div className={styles.listItem2001}>
                    <input
                      className={styles.filledIconscheckCircle1}
                      type="radio" checked
                    />
                    <div className={styles.text2002}>{t('PricesUSA-insurance')}</div>
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
                      {t('PricesUSA-checkcar')}
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
                      {t('PricesUSA-fotoport')}
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
