import Image from "next/image"
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";

const GalerieStyle = styled.div`
    .container{
        margin: 0 5rem;
        &__double{
            display: flex;
            justify-content: space-between;
            margin-bottom: var(--m150);
            gap: 20px;
            opacity: 0;
            img{
                border-radius: 10px;
            }
            &.active{
                opacity: 1;
                transition: 1s ease-in-out;
            }
        }
        &__banner{
            margin-bottom: var(--m150);
            opacity: 0;
            img{
                object-fit: cover;
                border-radius: 10px;
            }
            &.active{
                opacity: 1;
                transition: 1s ease-in-out;
            }
        }
        &__custom{
            opacity: 0;
            video {
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }
            img, video{
                border-radius: 10px;
            }
            img{
                object-fit: cover;
            }
            &.active{
                opacity: 1;
                transition: 1s ease-in-out;
            }
        }
        &__nextLink{
            cursor: pointer;    
            height: 30vh;
            display: flex;
            align-items: center;
            justify-content: center;
            &--subtitle{
                display: flex;
                align-items: center;
                gap: 10px;
                margin-right: 10px;
                &:hover + .container__nextLink--title .link{
                    top: 0;
                    transition: .5s ease-in-out;
                }
                p{
                    text-align: center;
                    color: #000;
                    opacity: .5;
                    font-size: 1.5rem;
                    transition: .5s ease-in-out;
                    &:hover{
                        transition: .5s ease-in-out;
                        margin-left: -35px;
                    }
                }
            }
            &--title{
                display: flex;
                position: relative;
                overflow: hidden;
                padding: 15px 0;
                p{
                    position: relative;
                    transition: .5s ease-in-out;
                    top: -100px;
                    font-size: 3rem;
                    color: #000;
                }
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
            &__nextLink{
                display: block;
                margin-top: var(--m100);
                &--subtitle{
                    justify-content: center;
                    p{
                        transition: none;
                        text-align: center;
                        &:hover{
                        transition: none;
                        }
                    }
                }
                &--title{
                    justify-content: center;
                    margin-top: var(--m50);
                    p{
                        top: 0;
                        font-size: 2.5rem;
                    }
                }
            }
        }
    }
`

export default function Galerie({projet}){
    const { squareImage, squareImage2, bannerImage,
        customImage, customVideo, nextLink
    } = projet?.fields
    console.log(projet);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
            }
        });
        }, { threshold: 0.5 });
    
        const observedElements = document.querySelectorAll('.observe-me');
        observedElements.forEach((element) => {
        observer.observe(element);
        });
    }, []);


    return(
        <GalerieStyle>
            <section className="container">
                <div className="container__double observe-me">
                    <Image 
                        src={'https:' + squareImage?.fields.file.url}
                        width={850}
                        height={560}
                        alt=""
                    />
                    <Image 
                        src={'http:' + squareImage2?.fields.file.url}
                        width={850}
                        height={560}
                        alt=""
                    />
                </div>
                <div className="container__banner observe-me">
                    {/* ajouter un parallax */}
                    <Image
                        src={'http:' + bannerImage?.fields.file.url}
                        width={1940}
                        height={750}
                        alt=""
                    />
                </div>
                <div className="container__custom observe-me">
                    { customVideo ? 
                        <video
                            autoPlay
                            muted
                            loop
                            src={'http:' + customVideo?.fields.file.url}
                            width={1080}
                            height={720}
                            alt=""
                        /> : 
                        <Image
                            src={'http:' + customImage?.fields.file.url}
                            width={1750}
                            height={1080}
                            alt=''
                        />
                    }
                </div>
                <div className="container__nextLink">
                    <div className="container__nextLink--subtitle">
                        <Link href={"/projet/" + nextLink} >
                            <p>Projet suivant</p>
                        </Link>
                        <Image
                            src={'/images/icone/grey_arrow.svg'}
                            alt=''
                            width={25}
                            height={25} 
                        />
                    </div>
                    <div className="container__nextLink--title">
                        <Link href={"/projet/" + nextLink} >
                            <p className="link">{nextLink}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </GalerieStyle>
    )
}