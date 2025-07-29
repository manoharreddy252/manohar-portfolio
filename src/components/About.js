import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTrophy, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: <FaTrophy className="achievement-icon" />,
      title: "Best Team Award",
      description: "Cisco Systems Inc. - BrightEdge SEO"
    },
    {
      icon: <FaCertificate className="achievement-icon" />,
      title: "Phish Buster Award", 
      description: "Virtusa - Cybersecurity Excellence"
    },
    {
      icon: <FaGraduationCap className="achievement-icon" />,
      title: "Academic Excellence",
      description: "College Topper - Semesters 5 & 6"
    }
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
                I'm a versatile and results-driven Full Stack Developer with 6+ years of experience 
                building and scaling end-to-end web applications for high-impact business environments.
              </p>
              <p className="about-description">
                Expert in crafting robust frontend and backend architectures using React.js, Node.js, 
                Python (Flask/Django), and modern databases (SQL/NoSQL). Proficient in designing 
                RESTful APIs, containerized microservices, and cloud-native deployments.
              </p>
              <p className="about-description">
                Proven track record of delivering secure, high-performance applications in Agile teams, 
                driving efficiency, automation, and user-centric innovation. Continuously passionate 
                about clean code, rapid prototyping, and solving complex real-world problems.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h4>6+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h4>50+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h4>3</h4>
                  <p>Companies</p>
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
                    <Card.Title className="achievement-title">
                      {achievement.title}
                    </Card.Title>
                    <Card.Text className="achievement-description">
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