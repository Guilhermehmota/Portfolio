import React from 'react'
import { Container, DivContainer, EducationCard, Title } from './styled'

const EducationSection = () => {
    return (
        <Container>
            <Title>Educação</Title>
            <DivContainer>
                <EducationCard>
                    <span>Graduação em Direito na Faculdade PUC Minas</span>
                    <span>Belo Horizonte/MG</span>
                    <span>2014-2020</span>
                    <span>Uma das faculdades mais tradicionais de todo o Brasil, a PUC Minas forma bachareis aptos aos exercícios de diversas carreiras jurídicas, além de uma preparação para soluções justas de conflitos e problemas.</span>
                </EducationCard>
                <EducationCard>
                    <span>Curso de Web Full Stack na Labenu</span>
                    <span>Curso remoto</span>
                    <span>6 meses - 2021</span>
                    <span>Escola de programação full-stack, focada em empregabilidade. Mais de 1000 horas de experiência. Isso tudo ao longo de 6 meses e com uma rotina de pelo menos 8 horas por dia. Além da parte técnica, também trabalhamos com metodologias ágeis, trabalhos em grupo e diversas outras habilidades socioemocionais.</span>
                </EducationCard>
                <EducationCard>
                    <span>Ensino Medio na Fundação Torino Escola Internacional</span>
                    <span>Nova Lima/MG</span>
                    <span>Curso técnico em turismo 2008-2012</span>
                    <span>Escola bilíngue onde fui alfabetizado também no italiano e tive a oportunidade de estar frequentemente em contato com a cultura europeia. </span>
                </EducationCard>
            </DivContainer>
        </Container>
    )
}

export default EducationSection
