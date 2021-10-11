import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import api from '@/services/api'

import {
  GBBackground,
  GBBottomNavBar,
  GBTextSearch,
  GBLabelUser,
  GBBookNav,
} from '@/components'

const Home: NextPage = () => {
  let abc = 0;

  useEffect(() => {
    async function tre() {
      await api.get('/volumes?q=rand')
      .then((response: any) => {
        abc = (response?.data?.items.slice(1, 4));
        console.log(abc);
      })
    };
  }, [])

  return (
    <>
      <Head>
        <title>Google Books App</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      </Head>
      <GBBackground>
        <GBTextSearch />
        <GBLabelUser />
        <GBBottomNavBar bottomFixed />
        <GBBookNav title="Reviews of The Days" link="All Video" />
        <GBBookNav title="Reviews of The Days" link="All Video" />
        <GBBookNav title="Reviews of The Days" link="All Video" />
      </GBBackground>
    </>
  )
};

export default Home
