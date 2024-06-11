import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import "./css/footer.css";
 
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <p>Links: </p>
              <a href="https://www.linkedin.com/in/divan-swanepoel" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Divan102" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Created by Divan Swanepoel</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

// Main component wrapping the content and footer
export const MainPage = () => {
  return (
    <div className="main-container">
      <div className="content">
        {/* Your main content goes here */}
      </div>
      <Footer />
    </div>
  );
};
