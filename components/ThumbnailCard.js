import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const ThumbnailCardStyle = styled.div`
    &:nth-child(odd){
        display: flex;
        justify-content: flex-end;
    }
    .container{
        margin: 0 10rem;
        display: flex;
        width: max-content;
        &__thumbnail{
            text-transform: uppercase;
            margin-bottom: var(--m100);
            &--image{
                margin-bottom: 30px;
            }
            &--info{
                h2{
                    font-weight: 500;
                    font-size: 1.25rem;
                }
            }
        }
        .highlight-info{
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        } 
    }
`


export default function ThumbnailCard({projet}) {
    const { title, client, type, thumbnail, slug } = projet.fields
    return (
        <ThumbnailCardStyle>
            <section className="container">
                <div className="container__thumbnail">
                    <Link href={'/projet/' + slug}>
                        <div className="container__thumbnail--image">
                            <Image
                                src={'https:' +thumbnail.fields.file.url}
                                alt='image illustratif, appelé thumbnail ou aperçu en cliquant dessus on arrive sur le détail du projet'
                                width={650}
                                height={420}
                            />
                        </div>
                    </Link>
                    <div className="container__thumbnail--info">
                        <div className="highlight-info">
                            <h2>{title}</h2>
                            <p>{client}</p>
                        </div>
                        <p>{type}</p>
                    </div>
                </div>
            </section>
        </ThumbnailCardStyle>
    )
}
