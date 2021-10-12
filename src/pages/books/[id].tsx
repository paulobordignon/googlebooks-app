export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: any){
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

function Books(props: any) {

  return(
    <div>
      {props.id}
    </div>
  )
}

export default Books;
