import styled from "styled-components"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import Galerie from "./Galerie"


const DetailProjetStyle = styled.div`
    .container{
        margin: 0 10rem;
        margin-top: var(--m150);
        margin-bottom: var(--m200);
        &__detail{
            &--info{
                display: flex;
                &-text{
                    width: 50%;
                    h2{
                        font-size: 1.125rem;
                        color: var(--secondary-color);
                        margin-bottom: 8px;
                        text-transform: uppercase;
                        font-weight: 500;
                        letter-spacing: 1px;
                    }
                    h3{
                        margin-bottom: 80px;
                    }
                    .info{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 100px;
                        margin-bottom: 80px;
                        &-projet{
                            p{
                                font-size: 1.25rem;
                            }
                        }
                    }
                    .link{
                        display: flex;
                        gap: 8px;
                        background: var(--body);
                        padding: 15px 20px;
                        width: fit-content;
                        border-radius: 10px;
                        a{
                        color: var(--background)!important;                      
                        }
                    }
                    .link {
                        position: relative;
                    }
                    .link img{
                        transform: translate(-10px, 10px);
                        transition: .4s ease-in-out;
                    }
                    .link:hover img{
                        transform: translate(0px, 0px);
                        transition: .4s ease-in-out;
                    }
                    .description{
                        line-height: 24px;
                        letter-spacing: normal;
                    }
                }
                &-image{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    img{
                        border-radius: 10px!important;
                    }
                }
            }
        }
    }
    h1{
        font-size: 5.25rem;
        margin-bottom: var(--m50);
    }
    @media(max-width: 768px){
        .container{
            margin: 0 30px;
            &__detail{
                flex-direction: row-reverse;
                &--info{
                    flex-wrap: wrap;
                    flex-direction: column-reverse;
                    &-image{
                        margin-bottom: var(--m50);
                    }
                    &-text{
                        width: 100%;
                        .info{
                            flex-wrap: nowrap;
                            justify-content: space-between;
                        }
                        .link{
                            margin-bottom: var(--m50);
                        }
                    }
                }
            }
        }
        h1{
            margin-top: var(--m100);
            font-size: 2rem;
            margin-bottom: var(--m50);
        }
    }
`

export default function DetailProjet({projet}){
    const { title, client, year, 
        bannImage, link, squareImage, squareImage2, bannerImage,
        customImage, description
    } = projet.fields

    return(
        <DetailProjetStyle>
            <section className="container">
                <h1>{title}</h1>
                <div className="container__detail">
                    <div className="container__detail--info">
                        <div className="container__detail--info-text">
                            <div className="info">
                                <div className="info-projet">
                                    <h2>Client</h2>
                                    <p>{client}</p>
                                </div>
                                <div className="info-projet">
                                    <h2>Année</h2>
                                    <p>{year}</p>
                                </div>
                            </div>
                            <h2>Description</h2>
                            <h3 className="description">{documentToReactComponents(description)}</h3>
                            <div className="link">
                                <Link
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >Voir le site
                                </Link>
                                <Image 
                                    src={'/images/icone/Arrow-diagwhite.svg'}
                                    height={10}
                                    width={10}
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className="container__detail--info-image">
                            <Image
                                src={'https:' + bannImage?.fields.file.url}
                                width={540}
                                height={360}
                                alt='image détail'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Galerie projet={projet}/>
        </DetailProjetStyle>
    )
}