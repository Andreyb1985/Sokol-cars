import { useMemo } from "react";
import styles from "./px.module.css";

const Px = ({
  filledIconsCheckCName,
  text200,
  text2001,
  text2002,
  pricetext,
  propAlignSelf,
  propFlex,
  propAlignSelf1,
  propFlex1,
  propColor,
  propColor1,
  propAlignSelf2,
  propFlex2,
  propColor2,
  propColor3,
}) => {
  const pxStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const iconsListItemStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const listItem200Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const text200Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const text2001Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const iconsListItem1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const listItem2001Style = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const text2002Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const pricetextStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div className={styles.px} style={pxStyle}>
      <div className={styles.iconsListItem} style={iconsListItemStyle}>
        <div className={styles.listItem200} style={listItem200Style}>
          <input
            className={styles.filledIconscheckCircle}
            type="radio"
            name={filledIconsCheckCName}
          />
          <div className={styles.text200} style={text200Style}>
            {text200}
          </div>
        </div>
      </div>
      <div className={styles.iconsListItem1}>
        <div className={styles.listItem2001}>
          <input className={styles.filledIconscheckCircle1} type="radio" />
          <div className={styles.text2001} style={text2001Style}>
            {text2001}
          </div>
        </div>
      </div>
      <div className={styles.iconsListItem2} style={iconsListItem1Style}>
        <div className={styles.listItem2002} style={listItem2001Style}>
          <input className={styles.filledIconscheckCircle2} type="radio" />
          <div className={styles.text2002} style={text2002Style}>
            {text2002}
          </div>
        </div>
      </div>
      <div className={styles.iconsListItem3}>
        <div className={styles.listItem2003}>
          <input className={styles.filledIconscheckCircle3} type="radio" />
          <div className={styles.pricetext} style={pricetextStyle}>
            {pricetext}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Px;
