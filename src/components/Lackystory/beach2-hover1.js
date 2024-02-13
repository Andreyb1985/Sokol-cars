import { useMemo } from "react";
import styles from "./beach2-hover1.module.css";

const Beach2Hover1 = ({
  unsplashYApiWyp0lqo,
  headingLinkGroup,
  heading3LinkToyotaCamrySE,
  prop,
  persons,
  heading6Placeholder,
  buyNowColor,
}) => {
  const heading6Style = useMemo(() => {
    return {
      color: buyNowColor,
    };
  }, [buyNowColor]);

  return (
    <div className={styles.beach2Hover}>
      <div className={styles.unsplashApiFrame}>
        <img
          className={styles.unsplashyapiwyp0lqoIcon}
          loading="eager"
          alt=""
          src={unsplashYApiWyp0lqo}
        />
        <div className={styles.carParts}>
          <div className={styles.vectorGroup}>
            <div className={styles.headingLinkGroup}>{headingLinkGroup}</div>
          </div>
        </div>
      </div>
      <div className={styles.divListingRating}>
        <div className={styles.divlistingContent}>
          <div className={styles.divlistingFeatures}>
            <b className={styles.heading3}>{heading3LinkToyotaCamrySE}</b>
            <div className={styles.divlistRating}>
              <div className={styles.symbol}></div>
              <div className={styles.div}>{prop}</div>
            </div>
          </div>
          <div className={styles.divlistingDetailsGroup}>
            <div className={styles.frameGroup}>
              <div className={styles.list}>
                <button className={styles.item}>
                  <div className={styles.carParts01svg}>
                    <div className={styles.carParts01svg1}>
                      <img
                        className={styles.vectorGroupIcon}
                        alt=""
                        src="/vector-group.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ph2d1f1d1c80}>
                    <div className={styles.auto}>Auto</div>
                  </div>
                </button>
                <button className={styles.item1}>
                  <div className={styles.list1}>
                    <div className={styles.item2}>
                      <div className={styles.carParts06svg}>
                        <div className={styles.carParts06svg1}>
                          <img
                            className={styles.carPartVector}
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.ph2d4d66a3dd}>
                        <div className={styles.persons}>{persons}</div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className={styles.item3}>
                  <div className={styles.carParts03svg}>
                    <div className={styles.carParts03svg1} />
                    <img
                      className={styles.petrolSymbolIcon}
                      loading="eager"
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
            <input
              className={styles.heading6}
              placeholder={heading6Placeholder}
              type="text"
              style={heading6Style}
            />
            <div className={styles.link}>
              <b className={styles.buyNow}>Buy Now</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach2Hover1;
