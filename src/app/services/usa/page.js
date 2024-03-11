import PricingCard1 from "@/components/PricesUSA/pricing-card1";
import FrameComponent from "@/components/PricesUSA/frame-component";
import Px from "@/components/PricesUSA/px";
import PrimaryButton from "@/components/PricesUSA/primary-button";
import PricingCard from "@/components/PricesUSA/pricing-card";
import styles from "./index.module.css";
import Layout from '@/components/Layout';

const PricesUSA = () => {
  return (
    <div className='root'>
      <Layout>
      <div className={styles.desktop1}>
      <div className={styles.frameRoot}>
        <PricingCard1 />
      </div>
      <div className={styles.pricingCard}>
        <div className={styles.pricingCardInner}>
          <div className={styles.frameParent}>
            <div className={styles.grouppopularmarkParent}>
              <div className={styles.grouppopularmark}>
                <img
                  className={styles.squarepaperPlaneIcon}
                  alt=""
                  src="/squarepaper-plane-1.svg"
                />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.priceFrame}>
                <div className={styles.subtitleFrame}>
                  <div className={styles.subtitleFrameInner}>
                    <div className={styles.subtitleParent}>
                      <div className={styles.subtitle}>Под ключ</div>
                      <div className={styles.priceText}>
                        <button className={styles.rectangleGroup}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.div}>ТОП</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <b className={styles.price}>Оптимальный</b>
                </div>
              </div>
            </div>
            <div className={styles.paragraph}>
            Индивидуальный поиск и подбор автомобиля. 
            </div>
          </div>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.spacersWrapper}>
            <div className={styles.spacers} />
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.rectangleFrame}>
              <FrameComponent />
              <div className={styles.frameText}>
                <b className={styles.px}>Что включено</b>
                <div className={styles.listItemFrame}>
                  <div className={styles.spacers1} />
                  <Px
                    text200="Подбор Автомобиля"
                    text2001="Проверка истории авто в США"
                    text2002="Связь с клиентом без выходных"
                    pricetext="Управление всем процессом"
                    propAlignSelf="unset"
                    propFlex="1"
                    propAlignSelf1="unset"
                    propFlex1="unset"
                    propColor="#d9dbe9"
                    propColor1="#d9dbe9"
                    propAlignSelf2="stretch"
                    propFlex2="1"
                    propColor2="#d9dbe9"
                    propColor3="#d9dbe9"
                  />
                </div>
              </div>
            </div>
            <PrimaryButton
              propWidth="308px"
              propAlignSelf="unset"
              propBackgroundColor="#fff"
              propColor="#4a3aff"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameRoot1}>
        <PricingCard />
      </div>
    </div>
      </Layout>
    </div>
    
  );
};

export default PricesUSA;
