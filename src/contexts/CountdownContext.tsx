import { create } from 'domain'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import challenges from '../../challenges.json'
import { ChallengesContext } from './ChallengesContext'

interface CountownProviderProps {
  children: ReactNode
}

interface CountownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountownContextData)

export function CountdownProvider({ children }: CountownProviderProps) {
  const { StartNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  // const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)

    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      StartNewChallenge()
    }
  }, [isActive, , time])

  const [minutleft, miuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondleft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        minutes,
        seconds,
        hasFinished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
