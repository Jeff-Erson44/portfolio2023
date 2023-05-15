import DetailProjet from '@/components/DetailProjet'
import { createClient } from 'contentful'
import Head from 'next/head'




const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESTOKEN_KEY,
})
export const getStaticPaths = async () =>{
    const res = await client.getEntries({
        content_type: 'projet'
    })
    const paths = res.items.map(item => {
        return {
            params :{ slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback : false
    }
}

export default function ProjetDetail({projet}){

    console.log(projet);
    const { title
        } = projet.fields

    return(
        <>
        <Head>
            <title>Jefferson.K - {title}</title>
        </Head>
        <DetailProjet projet={projet} />
        </>
    )
}






export async function getStaticProps({ params }){
    const {items} = await client.getEntries({
        content_type: 'projet',
        'fields.slug' : params.slug
    })
    return {
        props : { projet : items[0]},
        revalidate: 1
    }
}

