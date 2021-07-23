import React from 'react'
import styled from 'styled-components'
import me from '../../images/me.jpg'

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #063447;
    box-sizing: border-box;
    padding: 60px 0;
    @media only screen and (max-width: 984px){
    }
`
const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const PicContainer = styled.img`
    width: 250px;
    height: 305px;
    object-fit: cover;
    @media only screen and (max-width: 984px){
        height: auto;
    }
    @media only screen and (max-width: 480px){
        width: 250px;
        height: 250px;
    }
`
const Introduction = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 11%;
    @media only screen and (max-width: 767px){
        margin-top: 25px;
        margin-left: 0;
        width: 70%;
    }
    span {
        font-size: 42px;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;
        &:first-of-type {
            font-weight: bold;
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 12px;
            font-weight: normal;
            letter-spacing: -0.16px;
            margin-bottom: 26px;
            @media only screen and (max-width: 480px ){
                font-size: 18px;
            }
        }
        &:nth-of-type(3) {
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 26px;
            @media only screen and (max-width: 480px ){
                font-size: 20px;
            }
        }
        a {
                background-color: red;
                text-decoration: none;
            }
}
`
const Button = styled.div`
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #4eaccf;
    margin: 0 auto;
    text-align: center;
    padding: 5px 0;
    span {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
`

export default function Presentation() {
    return (
        <Container>
            <Profile>
                <PicContainer src={me}/>
                <Introduction>
                <span>Sobre mim</span>
                <span>Advogado de formação e apaixonado por tecnologia, decidi no final de 2019 dar um novo rumo para a minha vida. Fiz então o processo seletivo para a escola de programação Labenu, fui aprovado e em 6 meses aprendi a programar do zero ao full-stack. Além disso, desenvolvi vários projetos, em diferentes linguagens e frameworks, conforme exposto no meu perfil do github. Agora busco uma oportunidade de me inserir no mercado de trabalho e com a mesma dedicação e intensidade que aprendi, trabalharei para desenvolver os projetos que me foram confiados.</span>
                <span>|HTML &nbsp;|CSS &nbsp;|Javascript &nbsp;|React &nbsp;|Redux &nbsp;|NodeJS &nbsp;|Typescript &nbsp;|SQL &nbsp;|Testes &nbsp;|AWS</span>
                <Link ><Button><span>CV em PDF</span></Button></Link>
                </Introduction>
            </Profile>
        </Container>
    )
}