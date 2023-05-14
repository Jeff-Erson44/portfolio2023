import Head from 'next/head'
import Hero from '@/components/Hero'
import { createClient } from 'contentful'
import ThumbnailCard from '@/components/ThumbnailCard';
import styled from 'styled-components'

const IndexStyle = styled.div`

`


export default function Home({ projets }) {
  return (
    <IndexStyle>
      <Head>
        <title>Jefferson K. - Portfolio</title>
      </Head>
      <Hero/>
      {projets.map(projet=> (
        <ThumbnailCard class='test' key={projet.sys.id} projet={projet} />
      ))}
    </IndexStyle>
  )
}

export async function getStaticProps (){
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESTOKEN_KEY,
  })
  const res = await client.getEntries({ 
    content_type: 'projet'
  })
  return {
    props: {
      projets : res.items,
      revalidate : 1
    }
  }
}
