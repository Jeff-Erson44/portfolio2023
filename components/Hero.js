import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

const HeroStyle = styled.section`
    margin-left: 10rem;
    h1, h2{
        text-transform: uppercase;
        color: var(--body);
        font-size: 7rem;
        line-height: 10rem;
    }
    h1{
        font-weight: 500;
        overflow: hidden;
        span{
            display: block;
            animation: fadeTitle 1.2s ease-in-out;
        }
    }
    h2, h3{
        font-weight: 400;
        overflow: hidden;
        span{
            display: block;
            animation: fadeTitle 1.2s ease-in-out;
            animation-delay: .2s;
        }
    }
    h3{
        font-size: 3.75rem;
        color: var(--secondary-color);
        margin-bottom: 250px;
    }
    .hero{
        max-width: 100%;
        margin-bottom: 250px;
        margin-top: 150px;
        overflow: hidden;
        &__intro{
            width: 50%;
            margin-left: 50%;
            transform: translateX(-25%);
            h2{
                position: absolute;
                z-index: -1;
                font-size: 12rem;
            }
            h4{
                font-size: 4rem;
                margin-bottom: 8px;
            }
            &--highlight{
                position: absolute;
                z-index: -1;
                color: var(--secondary-color);
                opacity: .15;
                top: -30%;
                left: -5%;
                font-size: 12rem!important;
                white-space: nowrap;
            }
            h5{
                margin-bottom: 45px;
                font-size: 1.25rem;
                font-weight: 400;
                color: var(--secondary-color);
            }
            p{
                padding: 0 200px;
                margin-bottom: 35px;
                margin-left: -200px;
                line-height: 28px;
            }
            .button__seeMore{
                display: flex;
                gap: 8px;
                a{
                    font-weight: 600;
                }
            }
            .button__seeMore {
                position: relative;
            }
            .button__seeMore img{
                transform: translate(-10px, 10px);
                transition: .5s ease-in-out;
            }
            .button__seeMore:hover img{
                transform: translate(0px, 0px);
                transition: .5s ease-in-out;
            }
        }
    }
    .scroll{
        display: none;
    }

    @keyframes fadeTitle {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }



@media (max-width: 768px){
    margin: 0 30px;
    h1{
        padding-top: 200px;
        font-size: 3rem;
        margin-bottom: 25px;
    }
    h2{
        font-size: 2.5rem;
        margin-bottom: 50px;
    }
    h3{
        font-size: 1.5rem;
        margin-bottom: 125px;
    }
    h1,h2,h3{
        line-height: 40px;
        text-align: center;
    }
    p{
        display: block;
        text-align: center;
        font-weight: 500;
    }
    .hero{
        margin-bottom: 150px;
        &__intro{
            margin: 0 15px;
            width: 100%;
            transform: translate(0);
            h4{
                font-size: 1.5rem;
            }
            h5{
                font-size: .75rem;
            }
            p{
                padding: 0 30px 0 0;
                margin: 0 0 35px 0;
                font-size: .8rem;
                text-align: left;
                line-height: 24px;
            }
            &--highlight{
                position: absolute;
                z-index: -1;
                color: var(--secondary-color);
                opacity: .15;
                top: -20%;
                left: -5%;
                font-size: 7rem!important;
                white-space: nowrap;
            }
        }
    }
    .scroll{
        display: block;
        margin-bottom: 150px;
    }
}
`

export default function Hero(){
    return(
        <>
        <HeroStyle>
            <section className="hero">
                <h1><span>K.Jefferson</span></h1>
                <h2><span>Portfolio site.</span></h2>
                <h3><span>Développeur basé à Paris</span></h3>
                <p className="scroll">Scroll</p>
                <div className="hero__intro">
                    <h4>Jefferson Kouao</h4>
                    <h4 className="hero__intro--highlight"><span>Creative Web</span></h4>
                    <h5>Jefferson Kouao</h5>
                    <p>Je m&#39;appelle Jefferson, jeune développeur de 23 ans basé à Paris. Avec plus de 2 ans d&#39;expérience en tant que freelance, je suis passionné par le développement web et les technologies innovantes telles que la blockchain et les cryptomonnaies.</p>
                    <div className="button__seeMore">
                        <Link href={'/about'} target="_blank">Voir plus</Link>
                        <Image
                            src={'/images/icone/Arrow-diag.svg'}
                            alt='fleche'
                            width={10}
                            height={10}
                        />
                    </div>
                </div>
            </section>
        </HeroStyle>
        </>
    )
}