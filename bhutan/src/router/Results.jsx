import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import Logo from "./assets/logo.png"
import Results_Page from "./comp/results_page"
import {Link} from "react-router-dom";

import { useEffect } from 'react';
import "aos/dist/aos.css";

function Results() {
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
              <Link to="/" className="mt-2 mb-2 p-2" style={{color:"#999",fontSize:"22px",fontWeight:"600",textDecoration:"none"}}>Home</Link>
              <Link to="/results" className="mt-2 p-2 mb-2 active" style={{fontSize:"22px",fontWeight:"600",textDecoration:"none"}}>Results</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Results_Page />
      <div className="mt-3" style={{textAlign:"center",backgroundColor:"#eee",padding:"10px",color:"#444"}}>
        <span>
          Copyright © <a href="/admin">Bhutan Docoma</a> {(new Date().getFullYear())}. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default Results;