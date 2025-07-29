import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Semantic Search Pipeline",
      description: "Scalable NLP pipeline for intelligent URL retrieval from Cisco.com with 3M+ indexed URLs and 60% accuracy improvement.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "GPT-4", "LangChain", "FAISS", "FastAPI", "React.js"],
      github: "https://github.com/manoharreddy252/semantic-search",
      demo: "https://semantic-search-demo.com",
      featured: true
    },
    {
      title: "AI Customer Sentiment Intelligence",
      description: "Real-time sentiment analysis platform using GenAI to analyze customer reviews and feedback across multiple sources.",
      image: "/api/placeholder/400/250", 
      technologies: ["Python", "GPT-4", "HuggingFace", "FastAPI", "Grafana"],
      github: "https://github.com/manoharreddy252/sentiment-ai",
      demo: "https://sentiment-ai-demo.com",
      featured: true
    },
    {
      title: "Urban Data Exchange Platform",
      description: "Full-stack web application for real-time urban data visualization with 6+ integrated data streams and sub-second latency.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Flask", "Docker", "AWS", "RabbitMQ"],
      github: "https://github.com/manoharreddy252/urban-data",
      demo: "https://urban-data-demo.com",
      featured: false
    },
    {
      title: "DevOps IUDX Platform",
      description: "Enterprise-grade CI/CD pipeline with 99.9% uptime, containerized microservices, and automated monitoring.",
      image: "/api/placeholder/400/250",
      technologies: ["Docker", "AWS", "Grafana", "Jenkins", "Python"],
      github: "https://github.com/manoharreddy252/devops-iudx",
      demo: "https://iudx-demo.com",
      featured: false
    },
    {
      title: "Cloud Migration System",
      description: "End-to-end migration of TRIPS & Telematics to cloud-native architecture with zero data loss and 40% performance improvement.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "AWS", "Docker", "PostgreSQL"],
      github: "https://github.com/manoharreddy252/cloud-migration",
      demo: "https://cloud-migration-demo.com",
      featured: false
    },
    {
      title: "React Calculator",
      description: "Modern calculator application with beautiful UI, keyboard support, and responsive design deployed on GitHub Pages.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "CSS3", "Bootstrap", "GitHub Pages"],
      github: "https://github.com/manoharreddy252/calculator-react",
      demo: "https://manoharreddy252.github.io/calculator-react",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Some of my notable work and contributions
            </p>
          </Col>
        </Row>

        {/* Featured Projects */}
        <Row className="mb-5">
          {featuredProjects.map((project, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card 
                className="project-card featured-project h-100" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <Button 
                        variant="outline-light" 
                        size="sm" 
                        href={project.github}
                        target="_blank"
                        className="me-2"
                      >
                        <FaGithub />
                      </Button>
                      <Button 
                        variant="outline-light" 
                        size="sm"
                        href={project.demo}
                        target="_blank"
                      >
                        <FaExternalLinkAlt />
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Other Projects */}
        <Row>
          <Col lg={12} className="text-center mb-4">
            <h3 className="section-subtitle" data-aos="fade-up">Other Notable Projects</h3>
          </Col>
        </Row>
        <Row>
          {otherProjects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card 
                className="project-card h-100" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Card.Body>
                  <div className="project-header">
                    <FaCode className="project-icon" />
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag small">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;