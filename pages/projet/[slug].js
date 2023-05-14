import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
    const { title, client, type, year, description, thumbnail, detailImage, squareImage, squareImage2, bannerImage, customImage, link } = projet.fields
    return(
        <>
        <div>{title}</div> 
        <h3>{documentToReactComponents(description)}</h3>
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

