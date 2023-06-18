import styled from "styled-components"
import LinkSocial from "/components/LinkSocial"
import Link from "next/link"
import Image from "next/image"

const ContactContainerStyle = styled.div`
    width: 100%;
    h3{
        color: var(--secondary-color);
        text-transform: uppercase;
        font-weight: 500;
        line-height: 24px;
        margin: 30px 0 15px;
        font-size: 1.125rem!important;
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
    .link{
        display: flex;
        gap: 8px;
        background: var(--body);
        padding: 15px 20px;
        width: fit-content;
        border-radius: 10px;
        margin: 30px 0;
        a{
        color: var(--background)!important;                      
        }
    }
    .link {
        position: relative;
    }
    .link img{
        transform: translate(-10px, 10px);
        transition: .4s ease-in-out;
    }
    .link:hover img{
        transform: translate(0px, 0px);
        transition: .4s ease-in-out;
    }

`


export default function ContactContainer({socials}){
    return(
        <ContactContainerStyle>
            <div className="contact__container">
                <h3>Ville</h3>
                <p>Paris &bull; Île-de-France</p>
                <h3>Contact</h3>
                <div className="link__social">
                    <Link href="mailto:jeffersonk.pro@gmail.com">jeffersonk.pro@gmail.com</Link>
                </div>
                <h3>Réseaux Sociaux</h3>
                <LinkSocial 
                    socials={socials}
                />
                <div className="link">
                    <Link
                        href="/images/mon_cv.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        download={true}
                        >Voir mon CV
                    </Link>
                    <Image 
                        src={'/images/icone/Arrow-diagwhite.svg'}
                        height={10}
                        width={10}
                        alt=''
                    />
                </div>
            </div>
        </ContactContainerStyle>
    )
}

