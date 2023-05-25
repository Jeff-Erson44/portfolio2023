import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavbarStyled = styled.nav`

    .navbar__mobile{
        display: none;
    }

    .navbar{
        display: flex;
        height: 8vh;
        padding: 0 50px;
        background: var(--background);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        justify-content: space-between!important;
        width: -webkit-fill-available;
        animation : slideIn 1s ease-in-out;
        ul{
            display: flex;
            gap: 36px;
            align-items: center;
            li{
                align-items: center;
                text-transform: uppercase;
                font-family: 'Poppins';
                font-weight: 400;
                cursor: pointer;
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
    @media screen and (max-width: 768px){
        .navbar{
            display: none;
        }
        .navbar__mobile{
            position: fixed;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            z-index: 9;
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 20px;
                padding-top: 20px;
                background: white;
                a{
                    color: black!important;
                }
            }
        }
        .menu__slide{
            height: 100vh;
            background: var(--background);
            transform: translateX(0%);
            padding: 0 30px;
            transition: .7s ease-in-out;
            p{
                margin-bottom: var(--m100);
                font-size: 3.75rem;
                text-transform: uppercase;
                &:first-of-type{
                    padding-top: var(--m50);
                }
            }
            &--open{
                transform: translateX(100%);
            }
            .copyright{
                font-size: .75rem!important;
                text-transform: capitalize;
                position: absolute;
                bottom: 0px;
                right: 20px;
            }
        }
    }

    @keyframes slideIn {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0%);
        }
    }

`
export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

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
                            <>
                                <Image
                                    src="/images/icone/linkedin.svg"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                />
                            </>
                        </Link> 
                    </li>
                    <li>
                        <Link href='https://github.com/Jeff-Erson44' target="_blank">
                            <>
                                <Image
                                    src="/images/icone/github.svg"
                                    alt="Github"
                                    width={18}
                                    height={18}
                                />
                            </>
                        </Link> 
                    </li>
                </ul>
            </nav>
            <nav className="navbar__mobile">
                <ul>
                    <li onClick={handleNavbar}>
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
                {isOpen ?
                    <div className={`menu__slide`}>
                        <p onClick={handleNavbar}>
                            <Link href={'/'}>
                                Accueil
                            </Link>
                        </p>
                        <p onClick={handleNavbar}>
                            <Link href={'/about'}>
                                À propos
                            </Link>
                        </p>
                        <p onClick={handleNavbar}>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </p>
                        <p className="copyright">@Jefferson.K 2023</p>
                    </div>
                    :   
                    <div className={`menu__slide${isOpen ? '':'--open'}`}>
                        <p onClick={handleNavbar}>
                            <Link href={'/'}>
                                Accueil
                            </Link>
                        </p>
                        <p onClick={handleNavbar}>
                            <Link href={'/about'}>
                                À propos
                            </Link>
                        </p>
                        <p onClick={handleNavbar}>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </p>
                        <p className="copyright">@Jefferson.K 2023</p>
                    </div>
                }
            </nav>  
        </NavbarStyled>
        </>
    )
}