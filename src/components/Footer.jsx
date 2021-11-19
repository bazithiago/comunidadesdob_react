import styled from "styled-components";

const FooterStyles = styled.footer`
    width: 100%;
    background-color: #b7cbea;
    color: #333;
    text-align: center;
    padding: 6px 32px;
    font-size: 0.75rem;
    margin-bottom: 32px;

    a {
       color: blue !important;
    }
`

export default function Footer(){
    return(
        <FooterStyles>
                Criação e layout: <a href='https://twitter.com/pagalanxe' target='_blank' rel="noreferrer">Bruno Predolin</a>   |   App por <a href='https://thiagovieira.dev' target='_blank' rel="noreferrer">thiagovieira.dev</a>
        </FooterStyles>
    )
}