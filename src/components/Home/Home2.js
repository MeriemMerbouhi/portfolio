import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Welcome to my portfolio 😊
              <br />
              <br />I'm
              <i>
                <b className="purple">&nbsp;&nbsp;Meriem Merbouhi &nbsp;&nbsp;</b>
              </i>,&nbsp;a passionate 
              <i>
                <b className="purple">&nbsp;full-stack developer&nbsp; </b>
              </i>proficient in &nbsp;
              <i>
                <b className="purple">&nbsp;&nbsp;HTML,CSS, JavaScript, React, PHP (Laravel), and more.</b>
              </i>&nbsp;&nbsp;
              I craft<i>
                <b className="purple">&nbsp;dynamic web applications&nbsp;</b>
              </i>  &nbsp;with&nbsp;<i>
                <b className="purple">&nbsp;&nbsp;Bootstrap&nbsp;&nbsp; </b>
              </i> and <i>
                <b className="purple">&nbsp;&nbsp;Tailwind,&nbsp;&nbsp;</b>
              </i> 
              and 
              <i>
                <b className="purple">&nbsp;&nbsp;design sleek interfaces&nbsp;&nbsp; </b>
              </i>  using
              <i>
                <b className="purple">&nbsp;&nbsp;Figma.&nbsp;&nbsp;</b>
              </i><br/><br/>Let's connect,
              collaborate, and explore the exciting world of technology together. 
              Contact me to
              start our tech journey.
        </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MeriemMerbouhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MerbouhiMeriem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meriem-merbouhi-92238b1b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
