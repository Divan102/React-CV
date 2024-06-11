import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/adobe.svg';
import onPDFClick from '../assets/pdf/pdfTest.pdf'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scroll > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'avtive navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'avtive navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'avtive navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
{ /*linkedIn*/ }    <a href="https://www.linkedin.com/in/divan-swanepoel" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""></img></a>  
                    <a href="https://github.com/Divan102" target="_blank" rel="noopener noreferrer" onClick={onPDFClick}><img src={navIcon2} alt=""></img></a>
                    <a href={onPDFClick} download="Divan-Swanepoel-CV" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""></img></a>
                </div>
                {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}