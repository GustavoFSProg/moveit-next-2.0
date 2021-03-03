import { useContext, useEffect, useState } from 'react'
import { setTimeout, clearTimeout } from 'timers'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/pages/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60)
  // const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const minutes = Math.floor(time / 60)
  const [hashFinished, setHasFinished] = useState(false)

  const seconds = time % 60

  const { StartNewChallenge } = useContext(ChallengesContext)

  function startCountdon() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)

    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      StartNewChallenge()
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
      {hashFinished ? (
        <button disabled className={styles.CountdownButtonFinished}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}
