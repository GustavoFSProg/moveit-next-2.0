import { create } from 'domain'
import { createContext, ReactNode, useState } from 'react'

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengeContextData {
  level: number
  challengesCompleted: number
  currentExpierence: number
  StartNewChallenge: () => void
  levelUp: () => void
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExpierence, setCurrentExpierence] = useState(0)
  const [challengesCompleted, setchallengesCompleted] = useState(0)

  function levelUp() {
    setLevel(level + 1)
  }

  function StartNewChallenge() {
    alert('New Challenge')
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        StartNewChallenge,
        currentExpierence,
        levelUp,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
