import Head from 'next/head'
import api from '@/services/api'

import {
  GBBackground,
  GBBottomNavBar,
  GBBookCards,
  GBTextSearch
} from '@/components'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: any){
  const phrase = context.params.phrase

  const fetchBooks = async () => {
    const books = await api.get(`/volumes?q=${phrase}`);
    return books?.data;
  };
  const books = await fetchBooks();
  return {
    props: {
      books: books,
      phrase: phrase,
    }
  }
}

function Search(props: any) {
  return(
    <>
      <Head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      </Head>
      <GBBackground>
        <GBTextSearch phrase={props.phrase}/>
        {props.books.items && <GBBookCards books={props.books} />}
        <GBBottomNavBar bottomFixed/>
      </GBBackground>
    </>
  )
}

export default Search;
