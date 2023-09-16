import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loading;
