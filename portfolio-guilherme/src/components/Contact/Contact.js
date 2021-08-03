import React from 'react'
import github from '../../images/github.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import wpp from '../../images/wpp.png'
import {Container}  from './styled'

const Contact = () => {
    return (
        <Container>
            <div>Contrate-me!</div>
            <div>
                    Procuro oportunidade de trabalho onde eu possa aprender,
                    me desenvolver e evoluir na minha carreira profissional.<br/>
                    <br/>
                    E-mail para contato: guilhermehmota12@gmail.com<br/>
            </div>
            <div>
                <a href='https://github.com/Guilhermehmota' target="_blank">
                    <img src={github}/>
                </a>
                <a href='https://www.linkedin.com/in/guilhermehmotaalfredo/' target="_blank">
                    <img src={linkedin}/>
                </a>
                <a href='https://www.instagram.com/guilhermehmota/' target="_blank">
                    <img src={insta}/>
                </a>
                <a href="tel:31984845022" target="_blank">
                    <img src={wpp}/>
                </a>
            </div>
        </Container>
    )
}

export default Contact