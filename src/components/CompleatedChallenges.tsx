import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/pages/CompleateChallenge.module.css'

function CompleatedChallenges() {
  const { CompleteChallenge } = useContext(ChallengesContext)
  return (
    <div className={styles.CompleteChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{CompleteChallenge}</span>
    </div>
  )
}

export default CompleatedChallenges
