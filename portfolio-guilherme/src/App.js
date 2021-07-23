import React from 'react';
import styled from 'styled-components';
import Presentation from './components/Presentation/Presentation';
import Content from './components/Content/Content';
import EducationSection from './components/EducationSection/EducationSection';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cover from './components/Cover/Cover'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`
const SpecialWrapper = styled.div`
  width: 100%;
`

const App = () => {
  React.createRef()
  return (
    <PageWrapper>
      <Cover projectsInfo='#projects' contactInfo='#contact' />
      <Presentation />
      <Content />
      <EducationSection />
      <SpecialWrapper id='projects'>
        <Portfolio />
      </SpecialWrapper>
      <SpecialWrapper id='contact'>
        <Contact />
      </SpecialWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default App;