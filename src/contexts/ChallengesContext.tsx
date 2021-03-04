import { create } from 'domain'
import { createContext, ReactNode, useEffect, useState } from 'react'
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
  currentExpierence: number
  StartNewChallenge: () => void
  levelUp: () => void
  activeChallenge: Challenge
  resetChallenge: () => void
  expierenceToNextLevel: number
  CompleteChallenge: () => void
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExpierence, setCurrentExpierence] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const expierenceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1)
  }

  function StartNewChallenge() {
    const HandomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[HandomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount} xp!`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function CompleteChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExpierence = currentExpierence + amount

    if (finalExpierence >= expierenceToNextLevel) {
      finalExpierence = finalExpierence - expierenceToNextLevel
      levelUp()
    }

    setCurrentExpierence(finalExpierence)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        CompleteChallenge,
        StartNewChallenge,
        currentExpierence,
        levelUp,
        activeChallenge,
        resetChallenge,
        expierenceToNextLevel,
        challengesCompleted,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
