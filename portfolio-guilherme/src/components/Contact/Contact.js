import React from 'react'
import styled from 'styled-components'
import github from '../../images/github.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import wpp from '../../images/wpp.png'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #063447;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        max-width: 50%;
        height: 150px;
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        text-align: center;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 480px){
            height: 200px;
        }
        &:nth-of-type(2) {
            font-size: 18px;
            font-weight: normal;
            letter-spacing: -0.24px;
            text-align: center;
            @media only screen and (max-width: 767px){
                max-width: 80%
            };
            @media only screen and (max-width: 480px ){
                font-size: 20px;
            }
        }
        &:nth-of-type(3) {
            width: 20%;
            display: flex;
            justify-content: space-around;
            @media only screen and (max-width: 767px){
                width: 40%
            }
            @media only screen and (max-width: 480px){
                width: 60%
            }
        }
    }
`

const Contact = () => {
    return (
        <Container>
            <div>Contrate-me!</div>
            <div>
                    Procuro oportunidade de trabalho onde eu possa aprender,
                    me desenvolver e evoluir na minha carreia profissional.<br/>
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