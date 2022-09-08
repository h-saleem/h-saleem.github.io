import styled from 'styled-components'
import logoAlt from './assets/images/brand/logo/BrandLogo_Alt.png'
import './App.css';

const BrandLogo = styled.img`
  align-self: flex-start;
  @media only screen and (min-width: 768px) {
    width: 64px;
    grid-column: 2;
    grid-row: 2;
  }
  @media only screen and (max-width: 768px) {
    width: 48px;
    grid-column: 2;
    grid-row: 2;
  }
`;

const Grid = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    @media only screen and (min-width: 768px) {
      grid-template-columns: 10% 10% 5% 60% 5% 10%;
      grid-template-rows: 10% 15% 65% 10%;
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: 10% 10% 5% 60% 5% 10%;
      grid-template-rows: 5% 15% 75% 5%;
    }
`
const Background = styled.div`
  background-image: url(./assets/images/bg_pattern.svg);
  background-size: cover;
  filter: blur(100px);
  -webkit-filter: blur(100px);
  z-index: -1;
  height: 100vh;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top:0;
  left:0;
  grid-column: 1/span 6;
  grid-row: 1/span 4;
`

const IconStrip = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 8% 4% 8% 4% 8%;
    height: 24px;
`
const IconContainer1 = styled.img`
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  width: 40px;
`
const IconContainer2 = styled.img`
  grid-column: 3;
  grid-row: 1;
  justify-self: center;
  width: 40px;
`
const IconContainer3 = styled.img`
  grid-column: 5;
  grid-row: 1;
  justify-self: center;
  width: 40px;
`

const Container = styled.div`
  display: grid;
  align-self: center;
  text-align: center;
  justify-content: center;
  grid-column: 2/span 4;
  grid-row: 2/span 2;
`

const Heading = styled.p`
  font-family: fontExtraLight;
  margin: 0px;
  letter-spacing: -5px;
  color: #FFFFFF;
  line-height: 0.9;
  @media only screen and (min-width: 768px) {
    font-size: 88px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 72px;
  } 
`
const Paragraph = styled.p`
  font-family: fontSemiBold;
  margin: 0px;
  letter-spacing: -2px;
  color: #FFFFFF;
  line-height: 0.9;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  } 
`
const Spacer1 = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 8px;
  }
  @media only screen and (min-width: 768px) {
    padding: 8px;
  }
`
const Spacer2 = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 12px;
  }
  @media only screen and (min-width: 768px) {
    padding: 16px;
  }
`
const Spacer3 = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
  @media only screen and (min-width: 768px) {
    padding: 24px;
  }
`
const Spacer4 = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`


function App() {
  return (
    <div className="App">
      <Grid>
        <BrandLogo src={logoAlt} alt="logo" />
          <Container>
            <Heading>
              Coming soon
            </Heading>
            <Spacer4></Spacer4>
            <Paragraph>
              Get in touch:
            </Paragraph>
            <Spacer2></Spacer2>
            <IconStrip>
              <IconContainer1 src={logoAlt} alt="logo" />
              <IconContainer2 src={logoAlt} alt="logo" />
              <IconContainer3 src={logoAlt} alt="logo" />
            </IconStrip>
          </Container>
      </Grid>
    </div>
  );
}

export default App;
