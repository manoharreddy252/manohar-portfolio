import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI | ML | DL",
      icon: <SiTensorflow className="skill-category-icon" />,
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "LangGraph", "Transformers", "MLflow", "OpenAI", "Kaggle", "Jupyter", "Google Colab"]
    },
    {
      title: "Python Libraries", 
      icon: <FaPython className="skill-category-icon" />,
      skills: ["FastAPI", "Flask", "Django", "BeautifulSoup", "Selenium", "Pandas", "NumPy", "SQLAlchemy", "Matplotlib"]
    },
    {
      title: "Web Frameworks",
      icon: <FaReact className="skill-category-icon" />,
      skills: ["React.js", "Node.js", "Express", "Vue.js", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaAws className="skill-category-icon" />,
      skills: ["AWS (Lambda, EC2, S3, DynamoDB, EKS)", "Azure", "Google Cloud", "Docker", "Kubernetes", "Azure Machine Learning"]
    },
    {
      title: "Big Data & Streaming",
      icon: <SiKubernetes className="skill-category-icon" />,
      skills: ["Databricks", "Apache Spark", "Kafka", "Azure Data Factory", "AWS Kinesis", "Real-time Processing"]
    },
    {
      title: "Databases",
      icon: <SiMongodb className="skill-category-icon" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Neo4j", "DynamoDB", "Vector Databases"]
    },
    {
      title: "Languages",
      icon: <FaGitAlt className="skill-category-icon" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL", "HTML", "CSS"]
    },
    {
      title: "CI/CD & IaC",
      icon: <FaDocker className="skill-category-icon" />,
      skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Terraform", "AWS CloudFormation", "Ansible"]
    },
    {
      title: "Agentic Frameworks",
      icon: <SiTensorflow className="skill-category-icon" />,
      skills: ["LangChain", "LangGraph", "CrewAI", "Microsoft AutoGen", "UV", "RAG Pipelines"]
    },
    {
      title: "Monitoring & Tools",
      icon: <SiPostgresql className="skill-category-icon" />,
      skills: ["Grafana", "Kibana", "Prometheus", "Splunk", "Jira", "Git", "Airflow"]
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
            <p className="section-subtitle text-light" data-aos="fade-up" data-aos-delay="100">
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
                  <Card.Title className="skill-title text-white">{category.title}</Card.Title>
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