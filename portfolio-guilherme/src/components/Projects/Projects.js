import React from 'react'
import labex from '../../images/labex.png'
import labeimage from '../../images/labeimage.png'
import macbook from '../../images/macbook.png'
import { Container, DivButton, DivProject, ImageContainer, ImageStyled, Link, ProjectDescription, Title } from './styled'

const Projects = () => {
    return (
        <Container>
            <Title>Meus projetos</Title>
            <DivProject>
                <ImageContainer src={labex} direction='left' />
                <ProjectDescription direction='left'>
                    <span>LabeX</span>
                    <span>Frontend</span>
                    <span>O LabeX é uma plataforma que oferece viagens espaciais feita em React.js, possibilitando que o usuário se inscreva para uma das viagens disponíveis. Mas calma, não é tão fácil assim, para poder embarcar em uma viagem ele precisa da aprovação de um administrador. </span>
                    <div>
                        <Link href='https://github.com/Guilhermehmota/LabeX' target="_blank">
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
                    <span>Aplicação para backend realizada com Typescript e Node.js com o objetivo de criar uma rede social. Nesta rede é possível cadastrar um usuário, que ao fazer o login, pode criar postagens que podem ser visualizadas por outras pessoas cadastradas.</span>
                    <div>
                        <Link href='https://github.com/Guilhermehmota/Labook' target="_blank">
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
                    <span>Projeto Full-Stack voltado para os amantes de fotografias e imagens. Esta possibilita que os usuários cadastrados possam visualizar e compartilhar imagens com outros consumidores da aplicação. Frontend realizado com React.js e Backend realizado com Node.js.</span>
                        <div>
                            <Link href='https://github.com/Guilhermehmota/frontend-primeiro-projeto-full-stack' target="_blank">
                                Ver Frontend
                            </Link>
                        </div>
                        <div>
                            <Link href='https://github.com/Guilhermehmota/backend-primeiro-projeto-full-stack' target="_blank">
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