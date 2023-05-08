import Link from "next/link"
import styled from "styled-components"

const LinkSocialStyle = styled.div`
    .link__social{
        margin-bottom: 15px;
    }
`

export default function LinkSocial({socials}){
    return(
        <LinkSocialStyle>
            {socials?.map((social, index) =>(
                <div className="link__social" key={index}>
                    <Link href={social.link} target="_blank">
                        {social.name}
                    </Link>
                </div>
            ))}
        </LinkSocialStyle>
    )
}



