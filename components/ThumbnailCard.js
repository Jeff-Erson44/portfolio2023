import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { useRef, useEffect } from "react"

const ThumbnailCardStyle = styled.div`
    &:nth-child(odd){
        display: flex;
        justify-content: flex-end;
    }
    @media(max-width: 768px){
        &:nth-child(odd){
            justify-content: center;
        }
    }
    .container{
        margin: 0 10rem;
        display: flex;
        width: max-content;
        &__thumbnail{
            text-transform: uppercase;
            margin-bottom: var(--m100);
            opacity: 0;
            transition: 1s ease-in-out;
            &.active{
                opacity: 1;
                transition: 1s ease-in-out;
            }
            &--image{
                margin-bottom: 30px;
                cursor: pointer;
                img{
                transition: 1.5s ease-in-out;
                    &:hover{
                        transition: 1.5s ease-in-out;
                        transform: scale(1.05);
                    }
                }
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

    @media (max-width: 768px){
        .container{
            margin: 0 30px;
            width: fit-content;
            &__thumbnail{
                justify-content: center;
                &--info{
                    p{
                        font-size: 0.875rem;
                    }
                    h2{
                        font-size: 1.125rem;
                    }
                }
            }
        }
    }
`

export default function ThumbnailCard({projet}) {
    const { title, client, type, thumbnail, slug } = projet.fields

    const cardRef = useRef();
    useEffect(() =>{
        const observer = new IntersectionObserver((entries) => {
        console.log(entries);
            if(entries[0].isIntersecting){
                cardRef.current.classList.add('active');
                observer.unobserve(cardRef.current);
            }
        },{threshold: 0.5})
        observer.observe(cardRef.current);
    }, [])


    return (
        <ThumbnailCardStyle>
            <section className="container">
                <div ref={cardRef} className="container__thumbnail">
                    <Link href={'/projet/' + slug}>
                        <div className="container__thumbnail--image">
                            <Image
                                src={'https:' +thumbnail.fields.file.url}
                                alt='image illustratif, appelé thumbnail ou aperçu en cliquant dessus on arrive sur le détail du projet'
                                width={650}
                                height={420}
                                priority={true}
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
