import { ExperienceBar } from '../components/ExperienceBar'
import Head from 'next/head'
import Profile from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import CompleatedChallenges from '../components/CompleatedChallenges'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleatedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  )
}
