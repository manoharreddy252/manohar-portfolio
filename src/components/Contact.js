import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: "Email",
      value: "manoharreddy252@gmail.com",
      link: "mailto:manoharreddy252@gmail.com"
    },
    {
      icon: <FaPhone className="contact-icon" />,
      title: "Phone",
      value: "+91 8722361890",
      link: "tel:+918722361890"
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Location",
      value: "K.G.F, Karnataka, India",
      link: "#"
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      title: "LinkedIn",
      value: "linkedin.com/in/manoharreddy252",
      link: "https://linkedin.com/in/manoharreddy252"
    }
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4">
            <div className="contact-info" data-aos="fade-right">
              <h3 className="contact-title">Let's Connect</h3>
              <p className="contact-description">
                I'm always interested in hearing about new opportunities, 
                interesting projects, and ways to contribute to innovative solutions.
              </p>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-item-icon">
                      {info.icon}
                    </div>
                    <div className="contact-item-content">
                      <h5>{info.title}</h5>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="social-links-large">
                <a 
                  href="https://github.com/manoharreddy252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/manoharreddy252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Body>
                <h4 className="form-title">Send Message</h4>
                {showAlert && (
                  <Alert variant="success" className="mb-3">
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                    />
                  </Form.Group>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-100 custom-btn-primary"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;