import { create } from 'domain'
import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExpierence: number
  challengesCompleated: number
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
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExpierence, setCurrentExpierence] = useState(
    rest.currentExpierence ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleated ?? 0
  )

  const [activeChallenge, setActiveChallenge] = useState(null)

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const expierenceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExpierence', String(currentExpierence))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExpierence, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function StartNewChallenge() {
    const HandomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[HandomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    //   if (Notification.permission === 'granted') {
    //     new Notification('Novo desafio', {
    //       body: `Valendo ${challenge.amount} xp!`,
    //     })
    //   }
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
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
