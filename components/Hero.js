import styled from "styled-components"
import Image from "next/image"

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
    }
    h2, h3{
        font-weight: 400;
    }
    h3{
        font-size: 3.75rem;
        color: var(--secondary-color);
        margin-bottom: 175px;
    }
    .hero{
        max-width: 100%;
        &__intro{
            background: red;
            width: 50%;
        }
    }
    .scroll{
        display: none;
    }

@media (max-width: 768px){
    margin: 0 30px;
    h1{
        padding-top: 200px;
        font-size: 3.25rem;
        margin-bottom: 25px;
    }
    h2{
        font-size: 2.5rem;
        margin-bottom: 50px;
    }
    h3{
        font-size: 1.5rem;
        margin-bottom: 100px;
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
}
`

export default function Hero(){
    return(
        <>
        <HeroStyle>
            <section className="hero">
                <h1>K.Jefferson</h1>
                <h2>Portfolio site.</h2>
                <h3>Développeur basé à Paris</h3>
                <p className="scroll">Scroll</p>
                <div className="hero__intro">
                    <h4>Jefferon Kouao</h4>
                    <p>Je m&#39;appelle Jefferson, jeune développeur de 23 ans basé à Paris. Avec plus de 2 ans d&#39;expérience en tant que freelance, je suis passionné par le développement web et les technologies innovantes telles que la blockchain et les cryptomonnaies.</p>
                    <div className="button__seeMore">
                        <a>Voir plus</a>
                        <Image
                            src={'/images/icone/Arrow-diag.svg'}
                            alt='fleche'
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
            </section>
        </HeroStyle>
        </>
    )
}