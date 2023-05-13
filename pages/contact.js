import styled from "styled-components"
import Head from "next/head"
import Image from "next/image"
import ContactContainer from "/components/ContactContainer"

const ContactStyle = styled.div`
    h2{
        font-size: 6rem;
        font-weight: 400;
        text-transform: uppercase;
        margin-left: 5%;
        margin-bottom: 80px;
        margin-top: var(--m100);
        color: var(--body);
    }
    .container__contact{
        display: flex;
        padding: 0 20%;
        justify-content: space-between;
        margin-bottom: var(--m100);
        &--right{
            width: 70%;
        }
    }
    @media(max-width:768px){
        h2{
            padding-top: var(--m100);
            font-size: 3rem;
            font-weight: 400;
        }
        .container__contact{
            flex-wrap: wrap;
            flex-direction: column-reverse;
            padding: 0 50px;
            &--right{
                width: 100%;
                height: var(--100);
                margin-bottom: var(--m100);
            }
        }
    }
`

export default function ContactPage({socials}){
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
                        <ContactContainer 
                            socials={socials}
                        />
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
    return{
        props: {
            socials,
        }
    }
}