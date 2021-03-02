import { useEffect, useState } from 'react'
import { setTimeout, clearTimeout } from 'timers'
import styles from '../styles/pages/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  function startCountdon() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)

    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [isActive, , time])

  const [minutleft, miuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondleft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutleft}</span>
          <span>{miuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondleft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {isActive ? (
        <button
          onClick={resetCountdown}
          type="button"
          className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
        >
          Abandonar Ciclo
        </button>
      ) : (
        <button
          onClick={() => startCountdon()}
          type="button"
          className={styles.CountdownButton}
        >
          Iniciar um Ciclo
        </button>
      )}
    </div>
  )
}
