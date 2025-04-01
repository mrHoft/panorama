import styles from './palette.module.css';

export function Palette({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.palette}>
      <div className={styles.palette__side} onClick={onClick} />
      <div className={styles.palette__center}>
        <div className={styles.palette__box1} onClick={onClick} />
        <div className={styles.palette__box2} onClick={onClick} />
        <div className={styles.palette__box2} onClick={onClick} />
        <div className={styles.palette__box1} onClick={onClick} />
      </div>
      <div className={styles.palette__side} onClick={onClick} />
    </div>
  );
}
