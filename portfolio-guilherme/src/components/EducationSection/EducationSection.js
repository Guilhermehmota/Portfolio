import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #292929;
    justify-content: center;
    align-items: center;
`
export const Education = styled.div`
    width: 128px;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    margin: 0 auto;
    text-align: center;
    color: #ffffff;
    padding: 46px 0 29px 0;
    @media only screen and (max-width: 480px ){
        font-size: 31px;
    }
`
export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 29px 0 68px 0;
    height: auto;
    @media only screen and (max-width: 767px ){
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 20px;
        justify-items: center;
    }
`
export const EducationCard = styled.div`
    padding: 0 2px;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 300px;
    border-radius: 8px;
    background-color: #ffffff;
    margin-right: 6px;
    @media only screen and (max-width: 767px ){
        width: 70%;
        height: auto;
    }
    span {
            font-size: 21px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.28px;
            color: #292929;
            &:first-of-type {
                margin-bottom: 12px;
                @media only screen and (max-width: 480px ){
                    font-size: 27px;
                }
            }
            &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4){
                    font-size: 12px;
                    font-weight: normal;
                    letter-spacing: -0.16px;
                    margin-bottom: 12px;
                    @media only screen and (max-width: 480px ){
                        font-size: 18px;
                    }
            }
        }
`
const EducationSection = () => {
    return (
        <Container>
            <Education>Educação</Education>
            <MainWrapper>
                <EducationCard>
                    <span>Graduação em Direito na Faculdade Milton Campos</span>
                    <span>Nova Lima/MG</span>
                    <span>2013-2018</span>
                    <span>Considerada a melhor faculdade de Direito privada de Minas Gerais detentora do maior número de aprovações no exame da OAB do estado, a Faculdade Milton Campos é referência na formação de grandes juristas e profissionais.</span>
                </EducationCard>
                <EducationCard>
                    <span>Curso de Web Full Stack na Labenu</span>
                    <span>Curso remoto</span>
                    <span>6 meses - 2020</span>
                    <span>Escola de programação full-stack, focada em empregabilidade. São 6 meses full-time e mais de 1000 horas de experiência, em tempo real e com professores experientes. Dentre as competências ensinadas destacam-se tecnologias como: React, Javascript, Node.js, dentre outras.</span>
                </EducationCard>
                <EducationCard>
                    <span>Aprendizado de idiomas</span>
                    <span><li>Inglês fluente - curso de inglês em Sydney - Austrália em 2012</li></span>
                    <span><li>Francês avançado - curso de francês em Lyon - França em 2019</li></span>
                    <span><li>Italiano intermediário - aulas e autodidatismo</li></span>
                </EducationCard>
            </MainWrapper>
        </Container>
    )
}

export default EducationSection
