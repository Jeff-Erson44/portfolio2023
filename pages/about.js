import styled from "styled-components"
import Head from "next/head"
import Image from "next/image"
import ContactContainer from "/components/ContactContainer"

const AboutStyle = styled.div`
    .container__about{
        display: flex;
        margin-bottom: var(--m150);
        margin-top: var(--m100);
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
                margin-top: var(--m100);
                margin-bottom: var(--m50);
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
            margin-top: var(--m100);
            h3{
                margin-bottom: 8px;
                font-size: 1.5rem;
            }
            h5{
                opacity: .5;
                margin-bottom: var(--m30);
            }
            p{
                line-height: 28px;
                padding-right: 15%;
            }
        }            
        &--image{
            margin-top: var(--m100);
            width: 380px;
            height: 570px;
        }
        &--contact{
            margin-top: var(--m100);
        }
    }

    @media (max-width: 768px){
        .container__about{
            flex-wrap: wrap;
            margin-bottom: var(--m100);
            &--title{
                width: 100%;
                margin-bottom: var(--m50);
                h2{
                    font-size: 3rem;
                    margin-top : var(--m100);
                }
            }
            &--citation{
                font-size: 1rem;
                line-height: 24px;
                padding: 0 30px;
                width: 100%;
                margin: -30px 0;
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
                margin-bottom: -50px!important;
                h3{
                    font-size: 1.25rem;
                }
                h4{
                    font-size: 0.875rem;
                }
            }
            &--info{
                width: 100%;
                h3{
                    font-size: 1.25rem;
                }
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
                    src={'/images/moi.webp'}
                    alt="moi"
                    width={430}
                    height={570}
                    priority={true}
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
        text:
          "I’m Jefferson, a freelance developer based in Paris. I am passionate about web development and have an insatiable curiosity for the latest technologies and the digital world, I am always ready to take on new challenges. My special feature is the design of elegant, functional and user-friendly websites. But that’s not all! I’m also interested in the fascinating world of blockchain and fintech. As a freelancer, I appreciate the flexibility and autonomy it gives me. I am always looking for exciting new projects to continue to develop my skills and broaden my horizons. My commitment to excellence drives me to deliver exceptional results to my clients. If you are looking for a passionate, creative and reliable developer to bring your ideas to life, I’m here to help! Together, we can create unique and impactful solutions that will advance your. Feel free to contact me now to discuss your project and start this exciting adventure together."
      };
      
    
    return{
        props: {
            socials, 
            bio
        }
    }
}