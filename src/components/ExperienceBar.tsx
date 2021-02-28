import React from 'react'
import styles from '../styles/components/ExpierenceBar.module.css'

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: '50%' }}>
          <span style={{ left: '50%' }} className={styles.currentExpirence}>
            300 xp
          </span>
        </div>
      </div>
      <span>600</span>
    </header>
  )
}
