import styles from '../styles/pages/Countdown.module.css'

export function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <div>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}
