import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "Cisco Systems Inc.",
      position: "Lead Software Engineer",
      duration: "Mar 2022 - Present",
      location: "Hyderabad, India",
      description: "Leading development of AI-powered solutions and semantic search systems",
      achievements: [
        "Developed semantic search pipeline indexing 3M+ URLs with 60% accuracy improvement",
        "Built AI-powered sentiment analysis system for customer intelligence",
        "Integrated hybrid search logic combining keyword and semantic search",
        "Designed modular API-first architecture for internal tools"
      ],
      technologies: ["Python", "GPT-4", "LangChain", "FastAPI", "React.js", "AWS"]
    },
    {
      company: "Virtusa (Cisco Systems)",
      position: "Associate Software Developer", 
      duration: "Jun 2020 - Mar 2022",
      location: "Hyderabad, India",
      description: "Full-stack development and DevOps implementation",
      achievements: [
        "Built Indian Urban Data Exchange platform with real-time data visualization",
        "Integrated 6+ heterogeneous data streams with sub-second latency",
        "Implemented CI/CD pipelines achieving 99.9% uptime",
        "Containerized 15+ microservices with Docker and AWS deployment"
      ],
      technologies: ["Python", "Flask", "React.js", "Docker", "AWS", "RabbitMQ"]
    },
    {
      company: "Coextrix Technologies",
      position: "Associate Developer",
      duration: "May 2019 - May 2020", 
      location: "Bengaluru, India",
      description: "Cloud migration and system modernization",
      achievements: [
        "Led cloud migration of TRIPS & Telematics system with zero data loss",
        "Optimized database schemas improving query performance by 40%",
        "Integrated AWS services reducing infrastructure costs",
        "Refactored backend APIs for real-time data processing"
      ],
      technologies: ["Python", "AWS", "SQL", "Docker", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Work Experience</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              My professional journey and achievements
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="timeline-item" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-marker"></div>
                  <Card className="experience-card">
                    <Card.Body>
                      <div className="experience-header">
                        <div>
                          <h4 className="position-title">{exp.position}</h4>
                          <h5 className="company-name">
                            <FaBriefcase className="me-2" />
                            {exp.company}
                          </h5>
                        </div>
                        <div className="experience-meta">
                          <div className="duration">
                            <FaCalendarAlt className="me-2" />
                            {exp.duration}
                          </div>
                          <div className="location">
                            <FaMapMarkerAlt className="me-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                      <div className="achievements">
                        <h6>Key Achievements:</h6>
                        <ul>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="technologies">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;