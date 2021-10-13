import Head from 'next/head'
import api from '@/services/api'

import {
  GBBackground,
  GBBottomNavBar,
  GBBookInfo,
} from '@/components'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: any){
  const id = context.params.id

  const fetchBook = async () => {
    const book = await api.get(`/volumes/${id}`);
    return book?.data;
  };
  const book = await fetchBook();
  return {
    props: {
      book: book,
    }
  }
}

function Books(props: any) {

  return(
    <>
      <Head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      </Head>
      <GBBackground>
        <GBBookInfo item={props.book} />
        <GBBottomNavBar />
      </GBBackground>
    </>
  )
}

export default Books;
