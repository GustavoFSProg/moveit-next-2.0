import React from 'react'


export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0</span>
      <div>
        <div style={{ width: '50%' }}>
          <span style={{ left: '50%' }} className="current-expirence">
            300 xp
          </span>
        </div>
      </div>
      <span>600</span>
    </header>
  )
}
