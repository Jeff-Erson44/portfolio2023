import styled from "styled-components"
import Head from "next/head"
import Image from "next/image"
import ContactContainer from "/components/ContactContainer"

const AboutStyle = styled.div`
    .container__about{
        display: flex;
        margin-bottom: var(--mb150);
        margin-top: var(--mb100);
        &--title{   
            width: 50%;
            margin-left: 5%;
            h2{
                font-size: 6rem;
                text-transform: uppercase;
            }
        }
        &--citation{
            width: 50%;
            padding: 0 10%;
            p{
                font-size: 1.125rem;
                margin-top: var(--mb100);
                margin-bottom: var(--mb50);
                line-height: 27px;
                font-style: italic;
            }
            h4{
                font-style: italic;
                text-align: end;
            }
        }
    }
    .container__profil{
        padding: 0 5%;
        display: flex;
        &--title{
            width: 15%;
            h3{
                text-transform: uppercase;
                margin-bottom: 10px;
                font-size: 2rem;
            }
            h4{
                font-size: 1.5rem;
                opacity: .5;
            }
        }
        &--info{
            width: 40%;
            padding: 0;
            margin-top: var(--mb100);
            h3{
                margin-bottom: 8px;
            }
            h5{
                opacity: .5;
                margin-bottom: var(--mb30);
            }
            p{
                line-height: 28px;
                padding-right: 15%;
            }
        }            
        &--image{
            margin-top: var(--mb100);
            width: 380px;
            height: 570px;
        }
        &--contact{
            margin-top: var(--mb100);
        }
    }

    @media (max-width: 768px){
        .container__about{
            flex-wrap: wrap;
            &--title{
                width: 100%;
                margin-bottom: var(--mb50);
                h2{
                    font-size: 3rem;
                    margin-top : var(--mb100);
                }
            }
            &--citation{
                font-size: 1rem;
                line-height: 24px;
                padding: 0 30px;
                width: 100%;
                h4{
                    font-weight: 500;
                }
            }
        }
        .container__profil{
            flex-wrap: wrap;
            padding: 0 30px;
            &--title{
                width: 100%;
                h3{
                    font-size: 2rem;
                }
                h4{
                    font-size: 0.875rem;
                }
            }
            &--info{
                width: 100%;
            }
            &--image{
                display: none;
            }
            &--contact{
                margin-left: 30px;
            }
        }
    }
`

export default function Index({socials, bio}){
    return(
        <>
        <Head>
            <title>Jefferson K. - À propos</title>
        </Head>
        <AboutStyle>
        <section className="container__about">
            <div className="container__about--title">
                <h2>À Propos<br/>de moi</h2>
            </div>
            <div className="container__about--citation">
                <p>Rince toi la bouche avec des cailloux et dort sur un pieux planté dans l&#39;eau.</p>
                <h4>Natsume Sōseki</h4>
            </div>
        </section>
        <section className="container__profil">
            <div className="container__profil--title">
                <h3>Profil</h3>
                <h4>Profil</h4>
            </div>
            <div className="container__profil--info">
                <h3>Jefferson Kouao</h3>
                <h5>Jefferson Kouao</h5>
                <p>{bio?.text}</p>
                <div className="container__profil--contact">
                    <ContactContainer 
                        socials={socials}
                    />
                </div>
            </div>
            <div className="container__profil--image">
                <Image
                    src={'/images/moi.jpg'}
                    alt="moi"
                    width={430}
                    height={570}
                />
            </div>
        </section>
        </AboutStyle>
        </>
    )
}


export async function getStaticProps(){

    const socials = [
        {
            link: "https://www.linkedin.com/in/jefferson-kouao-developpeur-front-end/",
            name: "LinkedIn",
        },
        {
            link: "https://github.com/Jeff-Erson44",
            name: "Github",
        },
        {
            link: "",
            name: "Malt",
        },
        {
            link: "https://www.behance.net/Jefferson-Kouao",
            name: "Behance",
        },
        {
            link: "https://www.instagram.com/jeffersonk._/",
            name: "Instagram",
        },
        
    ]
    const bio = {
        text: "Je m'appelle Jefferson, jeune développeur de 23 ans basé à Paris. Avec plus de 2 ans d'expérience en tant que freelance, je suis passionné par le développement web et les technologies innovantes telles que la blockchain et les cryptomonnaies. Je suis déterminé à apporter ma contribution au monde numérique en créant des solutions ingénieuses. Je suis toujours à la recherche de nouveaux défis et de projets stimulants pour développer mes compétences et aider les entreprises à atteindre leurs objectifs."
    }
    
    return{
        props: {
            socials, 
            bio
        }
    }
}