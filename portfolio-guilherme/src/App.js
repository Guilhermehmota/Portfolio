import React from 'react';
import styled from 'styled-components';
import Presentation from './components/Presentation/Presentation';
import EducationSection from './components/EducationSection/EducationSection';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cover from './components/Cover/Cover'
import WhatIDo from './components/WhatIDo/WhatIDo';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`
const DivContainers = styled.div`
  width: 100%;
`

const App = () => {
  return (
    <MainContainer>
      <Cover aboutMeInfo='#aboutMe' projectsInfo='#projects' contactInfo='#contact' />
      <DivContainers id='aboutMe'>
      <Presentation />
      </DivContainers>
      <WhatIDo />
      <EducationSection />
      <DivContainers id='projects'>
        <Projects />
      </DivContainers>
      <DivContainers id='contact'>
        <Contact />
      </DivContainers>
      <Footer />
    </MainContainer>
  );
}

export default App;