import Link from "next/link"
import styled from "styled-components"
import Head from "next/head"
import Image from "next/image"

const ContactStyle = styled.div`
    h2{
        font-size: 6rem;
        font-weight: 400;
        text-transform: uppercase;
        margin-left: 5%;
        margin-bottom: 80px;
        color: var(--body);
    }
    .container__contact{
        display: flex;
        padding: 0 20%;
        justify-content: space-between;
        margin-bottom: var(--mb100);
        &--left{
            width: 25%;
            h3{
                color: var(--secondary-color);
                text-transform: uppercase;
                font-weight: 500;
                line-height: 24px;
                margin-bottom: 10px;
                &:nth-child(1){
                    &::before{
                    display: flex;
                    content:url('images/icone/arrow_long.svg');
                    position: relative;
                    top: 0;
                    left: -30px
                    }
                }
            }
            p{
                font-weight: 500;
                color: var(--body);
                margin-bottom: 30px;
            }
            .link__social{
                margin-bottom: 15px;
            }
        }
        &--right{
            width: 70%;
        }
    }
    @media(max-width:768px){
        h2{
            padding-top: var(--mb150);
            font-size: 3rem;
            font-weight: 400;
        }
        .container__contact{
            flex-wrap: wrap;
            flex-direction: column-reverse;
            padding: 0 50px;
            &--left{
                width: 100%;
            }
            &--right{
                width: 100%;
                height: var(--100);
                margin-bottom: var(--mb100);
            }
        }
    }
`

export default function Contact(){
    return(
        <>
        <Head>
            <title>Jefferson K. - Contact</title>
        </Head>
        <ContactStyle>
            <section>
                <h2>Contact</h2>
                <div className="container__contact">
                    <div className="container__contact--left">
                        <h3>Ville</h3>
                        <p>Paris <br/> Île-de-France</p>
                        <h3>Contact</h3>
                        <p>jeffersonk.pro@gmail.com</p>
                        <h3>Réseaux Sociaux</h3>
                        <p className="link__social">
                            <Link href='https://www.linkedin.com/in/jefferson-kouao-developpeur-front-end/' target="_blank">
                                LinkedIn
                            </Link>
                        </p>
                        <p className="link__social">
                            <Link href='https://github.com/Jeff-Erson44' target="_blank">
                                Github
                            </Link>
                        </p>
                        <p className="link__social">
                            <Link href='https://www.behance.net/Jefferson-Kouao' target="_blank">
                                Behance
                            </Link>
                        </p>
                        <p className="link__social">
                            <Link href='https://www.instagram.com/jeffersonk._/' target="_blank">
                                Instagram
                            </Link>
                        </p>
                        <p className="link__social">
                            <Link href='' target="_blank">
                                Malt
                            </Link>
                        </p>
                    </div>
                    <div className="container__contact--right">
                        <Image 
                            src="/images/contact__illustration.png" 
                            width={700} 
                            height={450} 
                            alt="Jefferson K. - Développeur Web" 
                        />
                    </div>
                </div>
            </section>
        </ContactStyle>
        </>
    )
}