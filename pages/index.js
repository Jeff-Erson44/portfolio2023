import Head from 'next/head'
import Hero from '@/components/Hero'
import { createClient } from 'contentful'
import ThumbnailCard from '@/components/ThumbnailCard';



export default function Home({ projets }) {
  console.log(projets);
  return (
    <>
      <Head>
        <title>Jefferson K. - Portfolio</title>
      </Head>
      <Hero/>
      {projets.map(projet=> (
        <ThumbnailCard key={projet.sys.id} projet={projet} />
      ))}
    </>
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
