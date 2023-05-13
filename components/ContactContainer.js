import styled from "styled-components"
import LinkSocial from "/components/LinkSocial"
import Link from "next/link"

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
            </div>
        </ContactContainerStyle>
    )
}

