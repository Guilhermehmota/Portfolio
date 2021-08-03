import React from 'react'
import { BackEnd, Container, FrontEnd, Specialities, Title } from './styled'


const WhatIDo = () => {
    return (
        <Container>
            <Title>O que faço ?</Title>
            <Specialities>
                <FrontEnd>
                    <span>Front-end</span>
                    <span>
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                    </span>
                </FrontEnd>
                <BackEnd>
                    <span>Back-end</span>
                    <span>
                        Aplicações utilizando NodeJS, Typescript e MySQL.
                        Criação de API's para comunicação com front-end seguindo princípio de Clean Code.
                    </span>
                </BackEnd>
            </Specialities>
        </Container>
    )
}

export default WhatIDo