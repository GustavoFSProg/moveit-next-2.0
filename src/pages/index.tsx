import { ExperienceBar } from '../components/ExperienceBar'
import Head from 'next/head'
import Profile from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import CompleatedChallenges from '../components/CompleatedChallenges'
import { Countdown } from '../components/Countdown'
import ChallengerBox from '../components/ChallegengerBox'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleatedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengerBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
