import React from 'react'
// import styles from '../styles/pages/ChallengeBox.module.css'
import styles from '../styles/pages/ChallengerBox.module.css'

function ChallengerBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengerNotActive}>
        <strong>Finalize um Ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="level UP" /> Avance de leel
          completando desafios
        </p>
      </div>
    </div>
  )
}

export default ChallengerBox
