import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auto from "../../Assets/Projects/auto.jpeg";
import aythen from "../../Assets/Projects/aythen.jpeg";
import rick from "../../Assets/Projects/rick.jpeg";
import mario from "../../Assets/Projects/mario.jpeg";
import casino from "../../Assets/Projects/casino.jpeg";


function Projects() {
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
            <ProjectCard
              imgPath={mario}
              isBlog={false}
              title="Videogames"
              description="This is a project to present in my final project,
              requested by my teachers, the idea is to show through an api that they give us, show all the video games, and also form to add a new one. It is made with ReactJS, Javascript, Htmls, Css, PostgreSQL, Express and NodeJS."
              ghLink="https://github.com/Aborio/VideoGames.git"
              demoLink="https://video-games-d6l5-op78728ai-aborio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aythen}
              isBlog={false}
              title="Aythen Company"
              description="This was the project of my last work experience, the idea and what I was called to do, was to make plugin and system very similar to FIGMA."
              ghLink="https://github.com/Aborio/aythen.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rick}
              isBlog={false}
              title="RiackAndMortys"
              description="This work was done as I was doing the bootcamp, the idea is through an API, show the characters of rick and morty, also with its own search engine and favorites bar. Made with ReactJS, Javascript, Html, Css, Express, NodeJS, PostgreSQL."
              ghLink="https://github.com/Aborio/rickandMortys.git"
              demoLink="https://rickand-mortys.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auto}
              isBlog={false}
              title="AutoPartes express"
              description="This is a bootcamp work done with classmates of the same course, experiencing a real work situation, we decided to make an Ecommerce, it is done with NestJS, Javascript, tailwind, Prisma and PostgreSQL."
              ghLink="https://github.com/Aborio/Autopart-Express.git"
              demoLink="https://autopart-express.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casino}
              isBlog={false}
              title="Casino App"
              description="This is a project that was monetized, for a client who only needed a page where clicking on the button, redirects them to their personal contact. Made with ReactJS, Javascrip, Css, Html"
              ghLink="https://github.com/Aborio/jugaApp.git"
              demoLink="https://juga-app.vercel.app/"
            />
          </Col>
          <p style={{ color: "rgb(155 126 172)" }}>
          Many of these projects can't see the back end development part in the deploy because I can't find free back end deploy. I invite you to download the repository and see them by their own means.{" "}
          </p>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
