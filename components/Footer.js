import styled from "styled-components"
import Image from 'next/image'
import Link from "next/link"


const FooterStyle = styled.div`
    .container__footer{
        max-width: 100%;
        height: 60vh;
        margin: var(--m150) var(--m300);
        &--top{
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 1rem;
            margin-bottom: var(--m50);
        }
        .footer--top-text{
            h2{
                font-size: 1.125rem;
                letter-spacing: .125px;
                line-height: 1.25;
            }
        }
        &--mid{
            margin-bottom: var(--m50);
            a{
                font-size: 4rem;
            }
        }
        &--bottom{
            h3{
                margin-bottom: var(--m50);
                text-transform: uppercase;
                font-weight: 400;
                font-size: 1.25rem;
            }
            &-social{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
        }
        .bottom-social-icone{
            display: flex;
            gap: 30px;
        }
        .bottom-link{
            display: flex;
            gap: 30px;
            a{
                text-transform: uppercase;
                font-weight: 500;
                font-size: 1.125rem;
            }
        }
    }
`

export default function Footer() {
    return(
        <FooterStyle>
            <section className='container__footer'>
                <div className="container__footer--top">
                    <div className="footer--top-image">
                        <Image
                            src='/images/moi-footer.png'
                            alt='moi'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="footer--top-text">
                        <h2>Une idée ? Un projet <br />
                            N&#39;hésitez pas à me contacter par e-mail.
                        </h2>
                    </div>
                </div>
                <div className="container__footer--mid">
                    <Link className="footer--mid-mail" href="mailto:jeffersonk.pro@gmail.com">jeffersonk.pro@gmail.com</Link>
                </div>
                <div className="container__footer--bottom">
                    <h3>Suivez-moi</h3>
                    <div className="container__footer--bottom-social">
                        <div className="bottom-social-icone">
                            <div className="image">
                                <Image
                                    src='/images/icone/linkedin.svg'
                                    width={20}
                                    height={20}
                                    alt='linkedin'
                                />
                            </div>  
                            <div className="image">
                                <Image
                                    src='/images/icone/github.svg'
                                    width={20}
                                    height={20}
                                    alt='github'
                                />
                            </div>  
                            <div className="image">
                                <Image
                                    src='/images/icone/instagram.svg'
                                    width={20}
                                    height={20}
                                    alt='instagram'
                                />
                            </div>
                        </div>
                        <div className="bottom-link">
                            <Link href={'/about'}>
                                À propos
                            </Link>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </FooterStyle>
    )
}


