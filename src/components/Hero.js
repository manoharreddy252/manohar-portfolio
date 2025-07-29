import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content" data-aos="fade-right">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="text-gradient">Manohar Reddy</span>
              </h1>
              <h2 className="hero-subtitle">Lead Software Engineer</h2>
              <p className="hero-description">
                Versatile Full Stack Developer with 6+ years of experience building 
                scalable web applications, AI-driven solutions, and cloud-native architectures. 
                Expert in React.js, Node.js, Python, and modern DevOps practices.
              </p>
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3 custom-btn-primary"
                  href="#contact"
                >
                  Get In Touch <FaArrowRight className="ms-2" />
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="custom-btn-outline"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <FaDownload className="me-2" /> Resume
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image" data-aos="fade-left">
            <div className="profile-container">
              <div className="profile-image">
                <div className="profile-bg"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-particles"></div>
    </section>
  );
};

export default Hero;