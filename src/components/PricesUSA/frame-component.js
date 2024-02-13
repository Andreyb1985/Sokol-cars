import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.priceText}>
      <b className={styles.price}>$500</b>
      <div className={styles.monthly}>
        <div className={styles.spacer} />
      </div>
    </div>
  );
};

export default FrameComponent;
