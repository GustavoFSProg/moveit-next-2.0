import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExpierenceBar.module.css'

export function ExperienceBar() {
  const { currentExpierence, expierenceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel = Math.round(
    (currentExpierence * 100) / expierenceToNextLevel
  )

  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}>
          <span
            style={{ left: `${percentToNextLevel}%` }}
            className={styles.currentExpirence}
          >
            {currentExpierence} xp
          </span>
        </div>
      </div>
      <span>{expierenceToNextLevel} xp</span>
    </header>
  )
}
