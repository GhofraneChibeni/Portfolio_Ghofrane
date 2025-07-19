import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carGO from "../../Assets/Projects/Car.Go.png";
import edu4all from "../../Assets/Projects/Edu4All.png";
import goShop from "../../Assets/Projects/Go.Shop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#575757ff" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edu4all}
              isBlog={false}
              title="Edu4All"
              description="Full-stack development of an e-learning web app featuring course management, integrated video conferencing, and secure payment handling."
              ghLink="#"
              demoLink="#"
              techs={["Node.js", "Express.js", "React.js", "MongoDB"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goShop}
              isBlog={false}
              title="Go.Shop"
              description="Developed a complete e-commerce solution with product catalog, shopping cart, order management, and AI-based product recommendations."
              ghLink="#"
              demoLink="#"
              techs={["Laravel", "Bootstrap", "MySQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carGO}
              isBlog={false}
              title="Car.Go"
              description="Developed a web platform for car sales allowing users to get expert opinions on financing options based on their salary via real-time chat."
              ghLink="#"
              demoLink="#"
              techs={["Laravel", "Bootstrap", "MySQL"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
