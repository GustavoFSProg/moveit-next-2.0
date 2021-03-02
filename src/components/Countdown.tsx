import { useEffect, useState } from 'react'
import { setTimeout } from 'timers'
import styles from '../styles/pages/Countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  function startCountdon() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, , time])

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

      <button
        onClick={() => startCountdon()}
        type="button"
        className={styles.CountdownButton}
      >
        Iniciar um Ciclo
      </button>
    </div>
  )
}
