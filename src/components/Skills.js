import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="skill-category-icon" />,
      skills: ["React.js", "Vue.js", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development", 
      icon: <FaNodeJs className="skill-category-icon" />,
      skills: ["Node.js", "Express.js", "Python", "Flask", "Django", "FastAPI", "RESTful APIs", "GraphQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: <SiTensorflow className="skill-category-icon" />,
      skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Transformers", "scikit-learn", "MLflow", "Jupyter"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaAws className="skill-category-icon" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Databases",
      icon: <SiMongodb className="skill-category-icon" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Neo4j", "DynamoDB", "SQLAlchemy", "Prisma"]
    },
    {
      title: "Tools & Technologies",
      icon: <FaGitAlt className="skill-category-icon" />,
      skills: ["Git", "Jira", "Grafana", "Kafka", "Spark", "Selenium", "BeautifulSoup", "Pandas"]
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Technologies and tools I work with
            </p>
          </Col>
        </Row>
        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card 
                className="skill-card h-100" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Card.Body className="text-center">
                  <div className="skill-icon-container mb-3">
                    {category.icon}
                  </div>
                  <Card.Title className="skill-title">{category.title}</Card.Title>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
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

export default Skills;