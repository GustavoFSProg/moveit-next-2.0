import { create } from 'domain'
import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  description: string
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
  resetChallenge: () => void
  expierenceToNextLevel: number
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExpierence, setCurrentExpierence] = useState(30)
  const [challengesCompleted, setchallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const expierenceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function StartNewChallenge() {
    const HandomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[HandomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
        resetChallenge,
        expierenceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
