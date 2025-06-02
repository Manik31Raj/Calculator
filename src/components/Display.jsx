import styles from "./display.module.css";
const Display = ({ disVal }) => {
  return (
    <input className={styles.display} type="text" value={disVal} readOnly />
  );
};
export default Display;
