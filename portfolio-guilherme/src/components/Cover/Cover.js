import React from 'react'
import github from '../../images/github.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import wpp from '../../images/wpp.png'
import Header from '../Header/Header'
import { Container, AboutMe, BackgroundContainer, DivMedias, DivText } from './styled'

const Cover = (props) => {
    return (
            <Container>
                <Header aboutMe={props.aboutMeInfo} projects={props.projectsInfo} contact={props.contactInfo}/>
                <BackgroundContainer>
                    <DivMedias>
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
                    </DivMedias>
                    <AboutMe>
                        <DivText>
                            <span>Eu sou</span>
                            <span>Guilherme Mota</span>
                            <span>Desenvolvedor Web Full-Stack</span>
                            <span>Apaixonado por programação e tecnologia</span>
                        </DivText>
                    </AboutMe>
                </BackgroundContainer>
            </Container>
    )
}

export default Cover