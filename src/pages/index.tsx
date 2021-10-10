import type { NextPage } from 'next'
import Head from 'next/head'
/* import api from '@/services/api' */
import { GBBottomNavBar, GBTextSearch } from '@/components'

const Home: NextPage = () => {
  /* const books = async () => {
    await api.get('/volumes?q=flowers+inauthor:ke').then((response: any) => { console.log(response) })
  }; */
  return (
    <>
      <Head>
        <title>Google Books App</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      </Head>
      <div className="min-w-screen min-h-screen bg-yellow-50 flex items-end justify-center pt-5">
      <div className="w-full max-w-md mx-auto">
        <GBTextSearch />
        <GBBottomNavBar bottomFixed/>
      </div>
      </div>
  </>
  )
};

export default Home
