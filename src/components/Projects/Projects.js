import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MeryShop from "../../Assets/Projects/meryshop.png";
import MeryTech from "../../Assets/Projects/merytech.png";
import restaurant from "../../Assets/Projects/restaurant.png";
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
              imgPath={MeryShop}
              isBlog={false}
              title="Mery Shop"
              description="Thrilled to introduce my latest e-commerce project! I've meticulously crafted a dynamic shopping website using HTML, CSS, Bootstrap, JavaScript, and jQuery. Experience the live site on my portfolio and explore the source code on GitHub. Stay tuned for updates, and feel free to browse the GitHub repository for an in-depth look. Happy shopping! 🛍️🌐💻"
              ghLink="https://github.com/MeriemMerbouhi/app-stor"
              demoLink="https://meriemmerbouhi.github.io/app-stor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MeryTech}
              isBlog={false}
              title="Mery Tech"
              description="Explore my project, a business services template meticulously crafted with HTML and CSS. This web application provides a professional and responsive design, tailored for showcasing various services. Discover the set features that make this template an ideal solution for businesses. For further details or potential collaboration, please connect with me. 🌐📱💼"
              ghLink="https://github.com/MeriemMerbouhi/service"
              demoLink="https://meriemmerbouhi.github.io/service/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="My pizza"
              description="My Pizza, a cutting-edge web app, now features two sides: Admin and Client. On the Admin side, restaurant managers take control with CRUD operations and reservation management. Meanwhile, the Client side offers users a seamless experience, with easy menu navigation and a user-friendly reservation system. Feel free to connect with me and share your thoughts! 🍕💻"
              ghLink="https://github.com/MeriemMerbouhi/restaurant.git            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
