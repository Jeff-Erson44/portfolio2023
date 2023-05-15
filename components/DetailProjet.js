import styled from "styled-components"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'


const DetailProjetStyle = styled.div`
    .container{
        margin: 0 10rem;
        margin-top: var(--m150);
        &__detail{
            &--info{
                background: orange;
                display: flex;
                &-text{
                    width: 50%;
                    background: red;
                    display: flex;
                    .info-projet{
                        background: green;
                        width: 50%;
                        h2{
                            font-size: 1.125rem;
                            color: var(--secondary-color);
                        }
                    }
                }
            }
        }
    }
    h1{
        font-size: 5.25rem;
        margin-bottom: var(--m50);
    }
`

export default function DetailProjet({projet}){
    const { title, client, year, description, 
        bannImage, squareImage, squareImage2,
        bannerImage, customImage, link 
    } = projet.fields

    return(
        <DetailProjetStyle>
            <section className="container">
                <h1>{title}</h1>
                <div className="container__detail">
                    <div className="container__detail--info">
                        <div className="container__detail--info-text">
                            <div className="info-projet">
                                <h2>Client</h2>
                                <p>{client}</p>
                            </div>
                            <div className="info-projet">
                                <h2>Année</h2>
                                <p>{year}</p>
                            </div>
                            <h2>Description</h2>
                            <h3>{documentToReactComponents(description)}</h3>
                            <Link 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Voir le site
                            </Link>
                        </div>
                        <div className="container__detail--info-image">
                            <Image
                                src={'https:' + bannImage.fields.file.url}
                                width={450}
                                height={270}
                                alt='image détail'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </DetailProjetStyle>
    )
}