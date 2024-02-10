import Beach2Hover1 from "@/components/Lackystory/beach2-hover1";
import Beach2Hover from "@/components/Lackystory/beach2-hover";
import styles from "./index.module.css";
import Layout from '@/components/Layout';

const Lackystory = () => {
  return (
    <div className='root'>
    <Layout>
    <div className={styles.div}>
      <main className={styles.divListingContent}>
        <Beach2Hover1
          unsplashYApiWyp0lqo="/unsplashyapiwyp0lqo@2x.png"
          headingLinkGroup="2015"
          heading3LinkToyotaCamrySE="Ford Mustang 5.0"
          prop="43тыс  км"
          persons="4 Persons"
          heading6Placeholder="$12300"
        />
        <Beach2Hover1
          unsplashYApiWyp0lqo="/unsplashyapiwyp0lqo-1@2x.png"
          headingLinkGroup="2013"
          heading3LinkToyotaCamrySE="BMW 5 F10"
          prop="113 тыс км"
          persons="5 Persons"
          heading6Placeholder="$3500"
          buyNowColor="#384be8"
        />
        <Beach2Hover1
          unsplashYApiWyp0lqo="/unsplashyapiwyp0lqo-2@2x.png"
          headingLinkGroup="2017"
          heading3LinkToyotaCamrySE="BMW X5 F15"
          prop="63 тыс км"
          persons="5 Persons"
          heading6Placeholder="$13800"
          buyNowColor="#0047ff"
        />
        <div className={styles.beach2Hover}>
          <div className={styles.unsplashyapiwyp0lqoParent}>
            <img
              className={styles.unsplashyapiwyp0lqoIcon}
              loading="eager"
              alt=""
              src="/unsplashyapiwyp0lqo-3@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.wrapper}>
                <div className={styles.div1}>2016</div>
              </div>
            </div>
          </div>
          <div className={styles.divlistingContentWrapper}>
            <div className={styles.divlistingContent}>
              <div className={styles.divlistingFeatures}>
                <b className={styles.heading3}>Audi Q5</b>
                <div className={styles.divlistRating}>
                  <div className={styles.symbol}></div>
                  <div className={styles.div2}>68 тыс км</div>
                </div>
              </div>
              <div className={styles.divlistingDetailsGroup}>
                <div className={styles.listWrapper}>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <div className={styles.carParts01svg}>
                        <div className={styles.carParts01svg1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector-group.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.ph2d1f1d1c80}>
                        <div className={styles.auto}>Auto</div>
                      </div>
                    </div>
                    <div className={styles.item1}>
                      <div className={styles.list1}>
                        <div className={styles.item2}>
                          <div className={styles.carParts06svg}>
                            <div className={styles.carParts06svg1}>
                              <img
                                className={styles.vectorIcon1}
                                alt=""
                                src="/vector-1.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.ph2d4d66a3dd}>
                            <div className={styles.persons}>5 Persons</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.item3}>
                      <div className={styles.carParts03svg}>
                        <div className={styles.carParts03svg1} />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className={styles.ph2d8a43bf71}>
                        <div className={styles.petrol}>Petrol</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divlistingLocationDetails}>
                <div className={styles.heading6}>
                  <b className={styles.b}>$11200</b>
                  <div className={styles.spanh2d7ca19f3b} />
                </div>
                <div className={styles.link}>
                  <b className={styles.buyNow}>Buy Now</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Beach2Hover
          unsplashYApiWyp0lqo="/unsplashyapiwyp0lqo-4@2x.png"
          prop="2015"
          heading3LinkToyotaCamrySE="Dodge Challenger"
          prop1="80 тыс км"
          prop2="$4800"
          byuNow="Byu Now"
        />
        <Beach2Hover
          unsplashYApiWyp0lqo="/unsplashyapiwyp0lqo-5@2x.png"
          prop="2017"
          heading3LinkToyotaCamrySE="BMW 5 G30"
          prop1="23 тыс км"
          prop2="$14800"
          byuNow="Buy Now"
        />
      </main>
      
    </div>
    </Layout>
    </div>
  );
};

export default Lackystory;
