import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Hero/>


      
    </div>
  )
}

export default Home
