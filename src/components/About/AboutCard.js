import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
               
            Hello, I am <span className="purple">Meriem merbouhi </span>
            from <span className="purple"> Morocco</span>
            <br /> studying at OFPPT.
            <br /><br />
            My educational focus is on Full Stack Development,
             which includes coding and web development.
            <br /><br />Beyond my technical pursuits,
            <br />
            I have a profound love for learning new languages and a strong desire
             to explore countries around the world while experiencing the rich rituals 
             and cultures of diverse peoples.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
