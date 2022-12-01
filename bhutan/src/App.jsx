import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from "./assets/logo.png"
import Slider from "./Slider";
import Intro from "./Intro";
import Result from "./Result";
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{background:"#f9f9f9",position:"sticky",top:"0px",zIndex:"1000",boxShadow:"0px 1px 3px #aaa"}}>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{textAlign:"center"}}>
              <Nav.Link href="/" className="mt-2 mb-2 active" style={{fontSize:"22px",fontWeight:"600"}}>Home</Nav.Link>
              <Nav.Link href="/result.html" className="mt-2 mb-2" style={{fontSize:"22px",fontWeight:"600"}}>Results</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Slider />
      <Intro />
      <h4 id="result" style={{textAlign:"center",fontWeight:"700",color:"#666666",textShadow:"0px 1px 2px #000",fontSize:"32px"}}>Result</h4>
      <Result />
      <div className="mt-3" style={{textAlign:"center",backgroundColor:"#eee",padding:"10px",color:"#444"}}>
        <span>
          Copyright © <a href="/admin">Bhutan Docoma</a> {(new Date().getFullYear())}. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default App;