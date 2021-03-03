import React from 'react'
// import styles from '../styles/pages/ChallengeBox.module.css'
import styles from '../styles/pages/ChallengerBox.module.css'

function ChallengerBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengerActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo D esafio</strong>
            <p>Levante de Corra!!!</p>
          </main>

          <footer>
            <button className={styles.challengFailButton} type="button">
              Falhei
            </button>
            <button className={styles.challengSuccededlButton} type="button">
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
