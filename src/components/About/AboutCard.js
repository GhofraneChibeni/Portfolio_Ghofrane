import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nice to meet you 👋🏻
            <br />
            <br />
            I’m a {" "}
            <span className="purple">Software Engineering student</span> at
            <span className="purple"> ISSAT Sousse</span>, passionate about creating useful and efficient web applications.
            <br />
            <br />
           I enjoy solving real-world problems through code and continuously improving my skills in <strong>Web Development</strong>.
  
            <br />
            <br />
            Every challenge is a chance to learn and grow as a future engineer.
            <br />
            <br />
            Outside of coding, I value <strong>teamwork</strong>, <strong>exploration</strong>, and staying curious.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, grow with passion."
          </p>
          <footer className="blockquote-footer">Ghofrane Chibeni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
