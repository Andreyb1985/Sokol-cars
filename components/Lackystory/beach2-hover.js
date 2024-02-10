import styles from "./beach2-hover.module.css";

const Beach2Hover = ({
  unsplashYApiWyp0lqo,
  prop,
  heading3LinkToyotaCamrySE,
  prop1,
  prop2,
  byuNow,
}) => {
  return (
    <div className={styles.beach2Hover}>
      <div className={styles.unsplashyapiwyp0lqoParent}>
        <img
          className={styles.unsplashyapiwyp0lqoIcon}
          loading="eager"
          alt=""
          src={unsplashYApiWyp0lqo}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.div}>{prop}</div>
          </div>
        </div>
      </div>
      <div className={styles.divlistingContentWrapper}>
        <div className={styles.divlistingContent}>
          <div className={styles.divlistingFeatures}>
            <b className={styles.heading3}>{heading3LinkToyotaCamrySE}</b>
            <div className={styles.divlistRating}>
              <div className={styles.symbol}></div>
              <div className={styles.div1}>{prop1}</div>
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
              <b className={styles.b}>{prop2}</b>
            </div>
            <div className={styles.link}>
              <b className={styles.byuNow}>{byuNow}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach2Hover;
