import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
// import styles from '../styles/pages/ChallengeBox.module.css'
import styles from '../styles/pages/ChallengerBox.module.css'

function ChallengerBox() {
  const { activeChallenge, resetChallenge, CompleteChallenge } = useContext(
    ChallengesContext
  )

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceed() {
    CompleteChallenge()
    resetCountdown()
  }

  function handleChallengedFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengerActive}>
          <header>Ganhe {activeChallenge.amount}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              onClick={handleChallengedFailed}
              className={styles.challengFailButton}
              type="button"
            >
              Falhei
            </button>
            <button
              onClick={handleChallengeSucceed}
              className={styles.challengSuccededlButton}
              type="button"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um Desafio </strong>
          <p>
            <img src="icons/level-up.svg" alt="level UP" /> Avance de leel
            completando desafios
          </p>
        </div>
      )}
    </div>
  )
}

export default ChallengerBox
