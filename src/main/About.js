import React, { useEffect } from "react";
import "./About.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <Container className="about-container">
      <Row>
        <Col>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            👋 I'm HOUSSAME, a React-focused Frontend Developer and UI/UX
            Designer.
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            🎨 I create pixel-perfect designs and turn them into user-friendly
            web apps.
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            🌐 Constantly learning to stay at the forefront of web development.
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            🤝 Collaborative, creative, and dedicated to delivering outstanding
            digital experiences.
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            🌟 Open to job opportunities!
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            Check out my skills :
          </h4>
          <div className="about-div">
            <Link to="/skills">
              <Button className="myskills-btn">
                My Skills <GrNext />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
