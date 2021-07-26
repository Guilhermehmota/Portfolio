import React from 'react'
import { Container, DivNav, Link } from './styled'

const Header = (props) => {
    return (
        <Container>
            <p>Guilherme</p>
            <DivNav>
                <p><Link href={props.aboutMe}>Quem sou</Link></p>
                <p><Link href={props.projects}>Projetos</Link></p>
                <p><Link href={props.contact}>Contato</Link></p>
            </DivNav>
        </Container>
    )
}

export default Header