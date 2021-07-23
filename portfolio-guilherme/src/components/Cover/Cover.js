import React from 'react'
import styled from 'styled-components'
import bike from '../../images/bike.jpg'
import github from '../../images/github.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import wpp from '../../images/wpp.png'
import Header from '../Header/Header'

export const Container = styled.div`
    width: 100%;
    height: 582px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        rgba(6, 52, 71, 0.45), 
        rgba(6, 52, 71, 0.45)
    ), url(${bike}) no-repeat scroll center;
    background-size: cover;

    @media only screen and (max-width: 767px) {
        height: auto;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 150px 0 150px 0;
`

export const SocialMedias = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    > a {
        margin-bottom: 24px;
    }
`
export const AboutMe = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    span {
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.29px;
            color: #ffffff;
            &:first-of-type {
                white-space: nowrap;
                font-size: 45px;
                margin-bottom: 6px;
            }
            &:nth-of-type(2) {
                display: flex;
                flex-wrap: wrap;
                font-size: 45px;
                margin-bottom: 6px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(3) {
                font-size: 25px;
                font-weight: normal;
                letter-spacing: -0.32px;
                white-space: nowrap;
                margin-bottom: 12px;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(4) {
                font-size: 20px;
                font-weight: normal;
                letter-spacing: -0.22px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
                @media only screen and (max-width: 480px ){
                    font-size: 20px;
                }
            }
    }

    @media only screen and (max-width: 767px) {
        width:75%;
    }
    @media only screen and (max-width: 500px) {
        justify-content: right;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Cover = (props) => {
    return (
            <Container>
                <Header projects={props.projectsInfo} contact={props.contactInfo}/>
                <ContentWrapper>
                    <SocialMedias>
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
                    </SocialMedias>
                    <AboutMe>
                        <TextWrapper>
                            <span>Eu sou</span>
                            <span>Guilherme Mota</span>
                            <span>Desenvolvedor Web Full-Stack</span>
                            <span>Apaixonado por programação e tecnologia</span>
                        </TextWrapper>
                    </AboutMe>
                </ContentWrapper>
            </Container>
    )
}

export default Cover