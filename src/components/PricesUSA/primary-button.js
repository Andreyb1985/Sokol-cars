import { useMemo } from "react";
import styles from "./primary-button.module.css";

const PrimaryButton = ({
  propWidth,
  propAlignSelf,
  propBackgroundColor,
  propColor,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const masterPrimaryButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buttonTextStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <button className={styles.primaryButton} style={primaryButtonStyle}>
      <div
        className={styles.masterPrimaryButton}
        style={masterPrimaryButtonStyle}
      >
        <img
          className={styles.lineRoundedsearchIcon}
          alt=""
          src="/line-roundedsearch.svg"
        />
        <b className={styles.buttonText} style={buttonTextStyle}>
        <a href="https://wa.me/380504111721?text=Добрый%20день.%20Меня%20интересует%20машина%20из%20США.">Связаться</a>
        </b>
        <img
          className={styles.lineRoundedarrowRight}
          alt=""
          src="/line-roundedarrow-right.svg"
        />
      </div>
    </button>
  );
};

export default PrimaryButton;
