import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

const handleNavbar = () => {
    setIsOpen(!isOpen);
}

const NavbarStyled = styled.nav`
    .navbar{
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        margin: 50px 0 200px 0;
        ul{
            display: flex;
            gap: 36px;
            align-items: center;
            li{
                align-items: center;
                text-transform: uppercase;
                font-family: 'Poppins';
                font-weight: 400;
            }
            &:first-child{
                li{
                    &:first-of-type{
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .navbar__mobile{
        display: none;
    }

    @media screen and (max-width: 768px){
        .navbar{
            display: none;
        }
        .navbar__mobile{
            display: block;
            position: fixed;
            z-index: 99;
            width: 100%;
            ul{
                display: flex;
                justify-content: space-between;
                background: var(--background);
                background: red;
                align-items: center;
                padding: 10px 30px;
            }
            .open{
                width: 100%;
                background: var(--background);
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
            }
        }
    }
`
    return(
        <>
        <NavbarStyled>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link href='/'>
                            Jefferson.K © 2023
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='/'>
                            À propos
                        </Link> 
                    </li>
                    <li>
                        <Link href='/'>
                            Contact
                        </Link> 
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <Link href='https://www.linkedin.com/in/jefferson-kouao-developpeur-front-end/' target="_blank">
                            <Image
                                src="/images/icone/linkedin.svg"
                                alt="LinkedIn"
                                width={18}
                                height={18}
                            />
                        </Link> 
                    </li>
                    <li>
                        <Link href='https://github.com/Jeff-Erson44' target="_blank">
                            <Image
                                src="/images/icone/github.svg"
                                alt="Github"
                                width={18}
                                height={18}
                            />
                        </Link> 
                    </li>
                </ul>
            </nav>
            <nav className="navbar__mobile">
                <ul>
                    <li>
                        <Link href='/'>
                            Jefferson.K © 2023
                        </Link>
                    </li>
                    <li onClick={handleNavbar}>
                        {isOpen ? 
                            <Image
                                src="/images/icone/menu.svg"
                                alt="close"
                                width={18}
                                height={18}
                            /> : <Image
                                src="/images/icone/close.svg"
                                alt="menu"
                                width={18}
                                height={18}
                            />
                        }
                    </li>
                </ul>
                <div className={isOpen ? 'open' : ''}>
                    <ul>
                        <li>
                            <Link href='/'>
                                À propos
                            </Link> 
                        </li>
                        <li>
                            <Link href='/'>
                                Contact
                            </Link> 
                        </li>
                    </ul>
                </div>
            </nav>  
        </NavbarStyled>
        </>
    )
}