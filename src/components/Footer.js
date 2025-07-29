import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="footer-content">
              <div className="footer-social">
                <a 
                  href="https://github.com/manoharreddy252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/manoharreddy252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:manoharreddy252@gmail.com"
                  className="footer-social-link"
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  Made with <FaHeart className="heart-icon" /> by Manohara Reddy B C
                </p>
                <p className="footer-subtitle">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;