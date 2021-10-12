import Head from 'next/head'
import api from '@/services/api'

import {
  GBBackground,
  GBBottomNavBar,
  GBTextSearch,
  GBLabelUser,
  GBBookNav,
} from '@/components'

export async function getServerSideProps() {
  const fetchBooksDiscover = async () => {
    const booksDiscover = await api.get('/volumes?q=rand');
    return booksDiscover?.data;
  };
  const booksDiscover = await fetchBooksDiscover();
  return {
    props: {
      booksDiscover: booksDiscover,
    }
  }
}

function Home(props: any) {
  console.log("teste", props.booksDiscover.items.slice(1, 4));
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
        <GBBookNav
          title="Discover new book"
          link="More"
          books={props.booksDiscover.items.slice(1, 4)}
        />
        <GBBookNav title="Currently Reading" link="All" />
        <GBBookNav title="Reviews of The Days" link="All Video" />
      </GBBackground>
    </>
  )
};

export default Home
