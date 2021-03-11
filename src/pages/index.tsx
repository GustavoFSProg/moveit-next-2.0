import { ExperienceBar } from '../components/ExperienceBar'
import Head from 'next/head'
import Profile from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import Header from '../components/Header'
import CompleatedChallenges from '../components/CompleatedChallenges'
import { Countdown } from '../components/Countdown'
import ChallengerBox from '../components/ChallegengerBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { useRouter } from 'next/router'

interface HomeProps {
  level: number
  currentExpierence: number
  challengesCompleated: number
}

export default function Home(props) {
  const history = useRouter()

  function ListRoute() {
    history.push('/routes/Register')
  }
  return (
    <ChallengesProvider
      level={props.level}
      challengesCompleated={props.challengesCompleted}
      currentExpierence={props.currentExpierence}
    >
      <Header />
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExpierence, challengeCompleated } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExpierence: Number(currentExpierence),
      challengesCompleted: Number(challengeCompleated),
    },
  }
}
