import styled from "styled-components"
import { useState, useEffect } from "react";

const FooterStyle = styled.div`
    .footer__container{
        height: 6vh;
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        align-items: flex-end;
        margin-bottom: 25px;
        &--right{
            text-align: right;
        }
    }
`

export default function Footer() {

    const [heure, setHeure] = useState('');

    useEffect(() => {
        const interval = setInterval(() =>{
            const date = new Date();
            const options = { timeZone: 'Europe/Paris' };
            const heures = date.getHours().toString().padStart(2, '0'); // Ajoute un zéro en tête si nécessaire
            const minutes = date.getMinutes().toString().padStart(2, '0'); // Ajoute un zéro en tête si nécessaire
            const heureActuelle = `${heures} : ${minutes}`;
            setHeure(heureActuelle);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <FooterStyle>
            <div className="footer__container">
                <div className="footer__container--left">
                    <h2>PARIS, FR : < br/>{heure}</h2>
                </div>
                <div className="footer__container--right">
                    <h2>©Jefferson.K < br/> 2023</h2>
                </div>
            </div>
        </FooterStyle>
    )
}

