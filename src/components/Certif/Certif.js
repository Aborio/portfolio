import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/Projects/ProjectCards";
import Particle from "../Particle";
import desarrollocoder from '../../Assets/Certif/desarrollocoder.jpeg'
import datacoder from '../../Assets/Certif/datacoder.jpeg'
import henry from '../../Assets/Certif/henry.jpeg'
import javacoder from '../../Assets/Certif/javacoder.jpeg'
import pythoncoder from '../../Assets/Certif/pythoncoder.jpeg'
import reactcoder from '../../Assets/Certif/reactcoder.png'
import CertifCard from "./CertifCard";


function Certif() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={desarrollocoder}
                isBlog={false}
                title="Web developer in CoderHouse"

              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={datacoder}
                isBlog={false}
                title="Data Analytics in CoderHouse"

              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={henry}
                isBlog={false}
                title="Full stack developer in SoyHenry"
              
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={javacoder}
                isBlog={false}
                title="Javascript developer in CoderHouse"

              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={pythoncoder}
                isBlog={false}
                title="Python developer in CoderHouse"

              />
            </Col>
            <Col md={4} className="project-card">
              <CertifCard
                imgPath={reactcoder}
                isBlog={false}
                title="React developer in CoderHouse"
              />
            </Col>

  
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Certif;