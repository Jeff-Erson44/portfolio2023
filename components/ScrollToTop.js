import Image from "next/image"
import styled from "styled-components"

const ScrollStyle = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: var(--body);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width: 768px){
        display: none;
    }
`

export default function ScrollToTop (){

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <>
        <ScrollStyle>
            <div className="test" onClick={handleClick}>
                <Image
                    src={'/images/icone/arrow.svg'}
                    alt=''
                    width={25}
                    height={50}
                />
            </div>
        </ScrollStyle>
        </>
    )
}