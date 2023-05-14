import Link from "next/link"
import Image from "next/image"

export default function ThumbnailCard({projet}) {
    const { title, client, type, thumbnail, slug } = projet.fields
    return (
        <>
            {title}
            <Image
                src={'https:' +thumbnail.fields.file.url}
                alt=''
                width={650}
                height={430}
            />
            <Link href={'/projet/' + slug}>
                clique
            </Link>
        </>
    )
}
