import Image from "next/image"
import styled from "styled-components";

const GalerieStyle = styled.div`
    .container{
        margin: 0 5rem;
        &__double{
            display: flex;
            justify-content: space-between;
            margin-bottom: var(--m150);
            gap: 20px;
            img{
                border-radius: 10px;
            }
        }
        &__banner{
            margin-bottom: var(--m150);
            img{
                object-fit: cover;
                border-radius: 10px;
            }
        }
        &__custom{
            video {
                width: -webkit-fill-available;
                height: -webkit-fill-available;
                border-radius: 10px;
            }
        }
    }
    @media(max-width: 768px){
        .container{
            margin: 0 30px;
            &__double{
                flex-wrap: wrap;
                gap: var(--m50);
                margin-bottom: var(--m50);
            }
            &__banner{
                margin-bottom: var(--m50);
            }
            &__custom{
                video{
                    display: none;
                }
            }
        }
    }
`

export default function Galerie({projet}){
    const { squareImage, squareImage2, bannerImage,
        customImage, customVideo
    } = projet?.fields
    console.log(projet);
    return(
        <GalerieStyle>
            <section className="container">
                <div className="container__double">
                    <Image 
                        src={'https:' + squareImage.fields.file.url}
                        width={850}
                        height={560}
                        alt=""
                    />
                    <Image 
                        src={'http:' + squareImage2.fields.file.url}
                        width={850}
                        height={560}
                        alt=""
                    />
                </div>
                <div className="container__banner">
                    {/* ajouter un parallax */}
                    <Image
                        src={'http:' + bannerImage.fields.file.url}
                        width={1940}
                        height={750}
                        alt=""
                    />
                </div>
                <div className="container__custom">
                    { customVideo ? 
                        <video
                            autoPlay
                            muted
                            loop
                            src={'http:' + customVideo.fields.file.url}
                            width={1080}
                            height={720}
                            alt=""
                        /> : 
                        <Image
                            src={'http:' + customImage.fields.file.url}
                            width={1080}
                            height={720}
                            alt=''
                        />
                    }
                </div>
            </section>
        </GalerieStyle>
    )
}