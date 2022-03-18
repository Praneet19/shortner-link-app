import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import styled from 'styled-components';
import Card from "react-bootstrap/Card";
import { AiFillFacebook, AiFillLinkedin,AiFillTwitterSquare,AiFillGithub,AiFillNotification  } from "react-icons/ai";

function App() {
  const [inputValue, setInputValue] = useState("");

  const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: black;
  margin: 3vw;
`;


  const Title2 = styled.h1`
font-size: 2em;
text-align: center;
color: #686868;
`;

  const Title3 = styled.h1`
font-size: 2em;
text-align: center;
color: #ffffff;
`;

  const padding = '4em'

  const Section = styled.section`
  padding: ${padding};
  color: white;
  background: ${props => props.background};
`



  const Box = styled.div`
  padding: 80px 60px;
  background: black; 
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

  const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

  const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

  const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

  const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>

      <Title>MORE THAN JUST <br /> SHORTER LINKS</Title>
      <div className="full-size-img" />

      <Section className='mid-image'>
        <div className="container">
          <InputShortener setInputValue={setInputValue} />

          <LinkResult inputValue={inputValue} />
        </div>
      </Section>

      <Title >Advanced Statistics</Title>
      <Title2>Track how your links are performing across the web with <br />our advanced statics dashboard</Title2>

      <form className="form-inline">
        <Card style={{ width: '20rem', marginTop:50, backgroundColor: "#DCDCDC",padding: '2rem'}}>
          <AiFillNotification/>
          <Card.Body>
            <Card.Title style={{fontSize: 20,color:'#5F9EA0'}}>Brand Recognition</Card.Title>
            <Card.Text style={{fontSize:14}}>
            Boost your brand recognition with each click. Generic links don't mean a thing.
            Branded links help instil confidence in your content.

            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem', marginTop:50, backgroundColor: "#DCDCDC",padding: '2rem', marginLeft:10}}>
          <AiFillNotification/>
          <Card.Body>
            <Card.Title style={{fontSize: 20,color:'#5F9EA0'}}>Brand Recognition</Card.Title>
            <Card.Text style={{fontSize:14}}>
            Boost your brand recognition with each click. Generic links don't mean a thing.
            Branded links help instil confidence in your content.

            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' , marginTop:50, backgroundColor: "#DCDCDC", padding: '2rem',marginLeft: 10}}>
          <AiFillNotification/>
          <Card.Body>
            <Card.Title style={{fontSize: 20,color:'#5F9EA0'}}>Brand Recognition</Card.Title>
            <Card.Text style={{fontSize:14}}>
            Boost your brand recognition with each click. Generic links don't mean a thing.
            Branded links help instil confidence in your content.

            </Card.Text>
          </Card.Body>
        </Card>

      </form>

      <Section className="foter-image">

        <Title3>Boost your links today</Title3>
        <button className='btn1'>Get Started</button>
      </Section>



      <Box>
        <h1 style={{
          color: "white",
          textAlign: "left",
          fontSize: 50,
          marginTop: "-60px"
        }}>
          Shortly
        </h1>
        <h1 style={{
          color: "white",
          textAlign: "left",
          marginTop: "2px",
        }}> 
          <AiFillTwitterSquare/> 
          <AiFillGithub/>
          <AiFillLinkedin/>
          <AiFillFacebook/>
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>features</Heading>
              <FooterLink href="#">Link Shortening</FooterLink>
              <FooterLink href="#">Branded Links</FooterLink>
              <FooterLink href="#">Analytics</FooterLink>
            </Column>
            <Column>
              <Heading>Resorces</Heading>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Developers</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </Column>
            <Column>
              <Heading>Company</Heading>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Development</FooterLink>
              <FooterLink href="#">Designing</FooterLink>
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">Analysis</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>



    </>
  );
}

export default App;
