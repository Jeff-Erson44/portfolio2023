import Link from "next/link"
import styled from "styled-components"

const ContactContainerStyle = styled.div`
    width: 100%;
    h3{
        color: var(--secondary-color);
        text-transform: uppercase;
        font-weight: 500;
        line-height: 24px;
        margin: 30px 0 15px;
        &:nth-child(1){
            &::before{
            display: flex;
            content:url('/images/icone/arrow_long.svg');
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
`


export default function Contact(){
    return(
        <ContactContainerStyle>
            <div className="contact__container">
                <h3>Ville</h3>
                <p>Paris &bull; Île-de-France</p>
                <h3>Contact</h3>
                <div className="link__social">
                    <a href="mailto:jeffersonk.pro@gmail.com">jeffersonk.pro@gmail.com</a>
                </div>
                <h3>Réseaux Sociaux</h3>
                <div className="link__social">
                    <Link href='https://www.linkedin.com/in/jefferson-kouao-developpeur-front-end/' target="_blank">
                    LinkedIn
                    </Link>
                </div>
                <div className="link__social">
                    <Link href='https://github.com/Jeff-Erson44' target="_blank">
                    Github
                    </Link>
                </div>
                <div className="link__social">
                    <Link href='https://www.behance.net/Jefferson-Kouao' target="_blank">
                    Behance
                    </Link>
                </div>
                <div className="link__social">
                    <Link href='https://www.instagram.com/jeffersonk._/' target="_blank">
                        <a>Instagram </a>
                    </Link>
                </div>
                <div className="link__social">
                    <Link href='' target="_blank">
                    Malt
                    </Link>
                </div>
            </div>
        </ContactContainerStyle>
    )
}