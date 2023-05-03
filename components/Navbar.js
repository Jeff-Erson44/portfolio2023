import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavbarStyled = styled.nav`

    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        width: -webkit-fill-available;
        height: 10vh;
        padding: 0 50px;
        background: var(--background);
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
                align-items: center;
                padding: 10px 30px;
                padding-top: 30px;
            }
            &--link{
                height: 100vh;
                transition: transform .8s ease-in-out;
                transform: translateX(0%);
                ul{
                    flex-wrap: wrap;
                    width: 100%;
                    height: 50vh;
                    li{
                        color: var(--body)!important;
                        a{
                            font-size: 3.5rem;
                            font-weight: 500;
                            text-transform: uppercase;
                            color: var(--body)!important;
                        }
                    }
                }
                p{
                    margin-left: -10px;
                    width: 100%;
                    text-align: end;
                }
            }
            &--link.open{
                transform: translateX(100%);
            }
        }
    }
`
export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    setIsOpen(false);
}, []);

const handleNavbar = () => {
    setIsOpen(!isOpen);
}


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
                        <Link href='/about'>
                            À propos
                        </Link> 
                    </li>
                    <li>
                        <Link href='/contact'>
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
                                src="/images/icone/close.svg"
                                alt="close"
                                width={18}
                                height={18}
                            /> : <Image
                                src="/images/icone/menu.svg"
                                alt="menu"
                                width={18}
                                height={18}
                            />
                        }
                    </li>
                </ul>
                {!isOpen ? 
                    <div className={`navbar__mobile--link ${isOpen ? '' : 'open'}`}>
                        <ul>
                            <li>
                                <Link href='/about'>
                                    À propos
                                </Link> 
                            </li>
                            <li>
                                <Link href='/contact'>
                                    Contact
                                </Link> 
                            </li>
                        </ul>
                    </div>
                    :
                    <div className={'navbar__mobile--link'}>
                        <ul>
                            <li>
                                <Link href='/about'>
                                    À propos
                                </Link> 
                            </li>
                            <li>
                                <Link href='/contact'>
                                    Contact
                                </Link> 
                            </li>
                        </ul>
                    </div>
                }
            </nav>  
        </NavbarStyled>
        </>
    )
}