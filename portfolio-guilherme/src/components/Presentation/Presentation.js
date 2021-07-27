import React from 'react'
import Gui from '../../images/Gui.jpeg'
import CV from '../../assets/CV.pdf'
import { Button, Container, DivPresentation, DivProfile, ImageContainer, Link } from './styled'


const Presentation = () => {
    return (
        <Container>
            <DivProfile>
                <ImageContainer src={Gui}/>
                <DivPresentation>
                <span>Sobre mim</span>
                <span>Graduado em Direito pela PUC Minas, ao final de 2020 realizei uma radical transição de carreira e ingressei no universo da tecnologia, pelo qual me interessei devido às possibilidades e liberdades proporcionadas por ele. Características que se adequam perfeitamente ao meu estilo de vida.</span>
                <span>|HTML  |CSS  |Javascript  |React  |NodeJS  |Typescript  |SQL  |Testes  |AWS</span>
                <Link href={CV} download ><Button><span>CV em PDF</span></Button></Link>
                </DivPresentation>
            </DivProfile>
        </Container>
    )
}

export default Presentation