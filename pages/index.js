import Head from 'next/head'
import Image from 'next/image'
import ActivitiesData from '../components/ActivitiesData'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Strava App advanced statistics</title>
        <meta name="description" content="Strava App advanced statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center w-full">
        <h1 className="font-black text-6xl my-6">Strava application</h1>
        <ActivitiesData />
      </main>
    </div>
  )
}
