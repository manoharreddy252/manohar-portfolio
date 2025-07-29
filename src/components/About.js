import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTrophy, FaCertificate, FaGraduationCap, FaAward } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: <FaTrophy className="achievement-icon" />,
      title: "Best Team Award",
      description: "Cisco Systems Inc. - BrightEdge SEO for leading impactful, data-driven SEO automation initiatives"
    },
    {
      icon: <FaAward className="achievement-icon" />,
      title: "Google Search Central",
      description: "Selected for Google's exclusive SEO & Web Indexing conference in Bangalore (2023)"
    },
    {
      icon: <FaCertificate className="achievement-icon" />,
      title: "Phish Buster Award", 
      description: "Virtusa - Excellence in phishing threat detection and cybersecurity enhancements"
    },
    {
      icon: <FaGraduationCap className="achievement-icon" />,
      title: "Academic Excellence",
      description: "College Topper - Semesters 5 & 6, Dept. of Technical Education"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect Professional (2025)",
    "Generative AI for Beginners - Simplilearn",
    "Introduction to Large Language Models - Virtusa",
    "GenAI Assisted Engineer - Google Cloud Education"
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Get to know more about my background and expertise
            </p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <div className="about-content" data-aos="fade-right">
              <h3 className="about-title">Lead Software Engineer</h3>
              <p className="about-description">
                Versatile and results-driven Full Stack Developer with 6+ years of experience 
                building and scaling end-to-end web applications for high-impact business environments.
              </p>
              <p className="about-description">
                Expert in crafting robust frontend and backend architectures using React.js, Node.js, 
                Python (Flask/Django), and modern databases (SQL/NoSQL). Proficient in designing 
                RESTful APIs, containerized microservices, and cloud-native deployments with 
                AWS, Docker, GitHub Actions, and CI/CD pipelines.
              </p>
              <p className="about-description">
                Proven track record of delivering secure, high-performance applications in Agile teams, 
                driving efficiency, automation, and user-centric innovation. Continuously passionate 
                about clean code, rapid prototyping, and solving complex real-world problems through 
                scalable, maintainable systems.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h4>6+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h4>3M+</h4>
                  <p>URLs Indexed</p>
                </div>
                <div className="stat-item">
                  <h4>60%</h4>
                  <p>Accuracy Improvement</p>
                </div>
              </div>
              
              <div className="certifications-section mt-4">
                <h5 className="text-white mb-3">Recent Certifications</h5>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <FaCertificate className="me-2 text-primary" />
                      <span className="text-light">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="achievements-grid" data-aos="fade-left">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="achievement-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="text-center">
                    <div className="achievement-icon-container">
                      {achievement.icon}
                    </div>
                    <Card.Title className="achievement-title text-white">
                      {achievement.title}
                    </Card.Title>
                    <Card.Text className="achievement-description text-light">
                      {achievement.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;