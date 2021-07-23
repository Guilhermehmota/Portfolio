import React from 'react'
import styled from 'styled-components'
import futurex from '../../images/futurex.PNG'
import spotenu from '../../images/SPOTENU.png'
import macbook from '../../images/macbook.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    max-width: 100%;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #4eaccf;
    padding: 43px 0 42px 0;
    white-space: nowrap;
    @media only screen and (max-width: 480px ){
        font-size: 31px;
    }
`
const ProjectCard = styled.div`
    width: 70%;
    padding: 30px 0 0 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
const ImgWrapper = styled.img`
    width: 45%;
    height: 216px;
    object-fit: contain;
        @media only screen and (max-width: 767px) {
            display: inline;
            width: 70%;
        }
    
    &:nth-of-type(2) {
        @media only screen and (max-width: 767px){
            display: none;
        }
    }
`
export const StyledImg = styled(ImgWrapper)`
    display: none;
    @media only screen and (max-width: 767px){
        display: inline
    }
`

const TextWrapper = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 767px){
        width: 70%;
        align-items: center;
    }
    span {
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        color: #063447;
        &:nth-of-type(2) {
            font-size: 21px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px;
            @media only screen and (max-width: 480px ){
                font-size: 27px;
            }
        }
        &:nth-of-type(3) {
            font-size: 12px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px;
            @media only screen and (max-width: 480px ){
                font-size: 18px;
            }
        }
    }
    div {
        width: 140px;
        height: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #4eaccf;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
        padding: 8px 0;
    }
`
const Bottom = styled.div`
    padding: 88px 0 71px 0;
    @media only screen and (max-width: 767px) {
        padding-top: 60x; 
    }
    > div {
        width: 150px;
        height: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #063447;
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        margin: 0 auto;
        text-align: center;
        color: #ffffff;
        padding: 6px 0;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
`

export default function Portfolio(props) {
    return (
        <Container>
            <Title>Meus projetos</Title>
            <ProjectCard>
                <ImgWrapper src={futurex} direction='left' />
                <TextWrapper direction='left'>
                    <span>FutureX</span>
                    <span>Frontend</span>
                    <span>FutureX é uma plataforma de viagens espaciais, onde o usuário pode se candidatar para integrar a tribulação da viagem que ele preferir. Este foi o projeto de conclusão da 10ª semana de curso Labenu e para realiza-lo foi necessário que criássemos a referida plataforma utilizando React + Redux e integrando as nossa funcionalidades com uma API previamente criada pelos instrutores.</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/FutureX' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
            </ProjectCard>
            <ProjectCard>
            <StyledImg src={macbook} direction='right' />
                <TextWrapper direction='right'>
                    <span>LaBook</span>
                    <span>BackEnd</span>
                    <span>Para este projeto, fomos desafiados a construir o sistema interno de uma rede social, o Facebook da Labenu. Deveríamos então, através do NodeJs, Typescript, mysql, dentre outras ferramentas, possibilitar que nosso backend realizasse todas as operações necessárias para garantir a execução de funcionalidades comuns em uma rede social: cadastro, login, fazer e desfazer amizade, ver feed, etc...</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/Labook' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
                <ImgWrapper src={macbook} direction='right' />
            </ProjectCard>
            <ProjectCard>
                <ImgWrapper src={spotenu} direction='left' />
                <TextWrapper direction='left'>
                    <span>Spotenu</span>
                    <span>Full-Stack</span>
                    <span>Rede social voltada para amantes da música. Nosso trabalho foi criar tanto o front como o backend, integrá-los e de gerenciar a hospedagem do aplicativo, fosse no firebase ou AWS. Este foi o projeto final da Labenu, onde pela primeira vez fomos desafiados a fazer um projeto full-stack. As ferramentas utilizadas foram aquelas ensinadas durante o curso: NodeJS, React, Redux, MySQL, dente outras...</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/Spotenu-full-stack-version' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
            </ProjectCard>
            <Bottom>
                <div><Link href='https://github.com/ViniciusAbuhid?tab=repositories' target="_blank">mais projetos</Link></div>
            </Bottom>
        </Container>
    )
}