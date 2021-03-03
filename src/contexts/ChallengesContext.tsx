import { create } from 'domain'
import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  descrition: string
  amount: number
}

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengeContextData {
  level: number
  challengesCompleted: number
  currentExpierence: number
  StartNewChallenge: () => void
  levelUp: () => void
  activeChallenge: Challenge
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExpierence, setCurrentExpierence] = useState(0)
  const [challengesCompleted, setchallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  function levelUp() {
    setLevel(level + 1)
  }

  function StartNewChallenge() {
    const HandomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[HandomChallengeIndex]

    setActiveChallenge(challenge)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        StartNewChallenge,
        currentExpierence,
        levelUp,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
