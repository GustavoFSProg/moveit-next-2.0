import { useContext, useEffect, useState } from 'react'
import { setTimeout, clearTimeout } from 'timers'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/pages/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const {
    isActive,
    minutes,
    seconds,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  const [minutleft, miuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondleft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div className={styles.innerDiv}>
          <span>{minutleft}</span>
          <span>{miuteRight}</span>
        </div>
        <span>:</span>
        <div className={styles.innerDiv}>
          <span>{secondleft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
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
              onClick={() => startCountdown()}
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
