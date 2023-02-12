import type { NextPage } from 'next'
import Head from 'next/head'
import { Brand } from '../components/brand'
import Header from '../components/Header'
import { Hero } from '../components/Hero'
import {Middle} from '../components/Middle'
import { NonKyc } from '../components/NonKyc'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Hero/>
      <Middle/>
      <NonKyc/>
      <Brand/>


      
    </div>
  )
}

export default Home
