import styled from 'styled-components';

const ContactBannerStyle = styled.div`
    .container__banner{
        width: 100%;
        background : #000;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--m200);
        p{
            color: #fff;
            font-size: 4rem;
        }
    }
    @media(max-width: 768px){
        .container__banner{
            height: 25vh;
            p{
                font-size: 2rem;
            }
        }
    }
`

export default function ContactBanner(){
    return(
        <ContactBannerStyle>
            <div className='container__banner'>
                <p>Contactez-moi</p>
            </div>  
        </ContactBannerStyle>
    )
}