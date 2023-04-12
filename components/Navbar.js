import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {

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
                        <Link href='/'>
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
        </NavbarStyled>
        </>
    )
}