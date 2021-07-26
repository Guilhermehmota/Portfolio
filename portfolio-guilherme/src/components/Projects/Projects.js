import React from 'react'
import astromatch from '../../images/astromatch.png'
import labeimage from '../../images/labeimage.png'
import macbook from '../../images/macbook.png'
import { Container, DivButton, DivProject, ImageContainer, ImageStyled, Link, ProjectDescription, Title } from './styled'

const Projects = () => {
    return (
        <Container>
            <Title>Meus projetos</Title>
            <DivProject>
                <ImageContainer src={astromatch} direction='left' />
                <ProjectDescription direction='left'>
                    <span>Astromatch</span>
                    <span>Frontend</span>
                    <span>Descrição.</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/FutureX' target="_blank">
                            Ver no Github
                        </Link>
                    </div>
                </ProjectDescription>
            </DivProject>
            <DivProject>
                <ImageStyled src={macbook} direction='right' />
                <ProjectDescription direction='right'>
                    <span>LaBook</span>
                    <span>BackEnd</span>
                    <span>descrição</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/Labook' target="_blank">
                            Ver no Github
                        </Link>
                    </div>
                </ProjectDescription>
                <ImageContainer src={macbook} direction='right' />
            </DivProject>
            <DivProject>
                <ImageContainer src={labeimage} direction='left' />
                <ProjectDescription direction='left'>
                    <span>Labeimage</span>
                    <span>Full-Stack</span>
                    <span>Adicionar descrição    
                    </span>
                        <div>
                            <Link href='https://github.com/ViniciusAbuhid/Spotenu-full-stack-version' target="_blank">
                                Ver Frontend
                            </Link>
                        </div>
                        <div>
                            <Link href='https://github.com/ViniciusAbuhid/Spotenu-full-stack-version' target="_blank">
                                Ver Backend
                            </Link>
                        </div>
                    
                </ProjectDescription>
            </DivProject>
            <DivButton>
                <div><Link href='https://github.com/Guilhermehmota?tab=repositories' target="_blank">mais projetos</Link></div>
            </DivButton>
        </Container>
    )
}

export default Projects