import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote> */}
        <p className="home-about-body">
            I have a deep passion for programming and have been honing my skills for years. As a <span className="purple">senior software engineer </span>, I specialize in <span className="purple"> MERN stack development and blockchain technologies </span>, building innovative solutions that leverage the latest advancements in <span className="purple"> web3. </span> <br /> <br />

 My field of interest is <span className="purple">building new web technologies and products </span>, as well as exploring areas related to deep learning and natural language processing. <br /> <br />

Whenever possible, I apply my passion for developing products with <span className="purple"> Node.js and modern Javascript libraries and frameworks like React.js,Express.js and Next.js </span>. These tools enable me to build high-performance, scalable applications that deliver a seamless user experience. <br /> <br />

With a track record of delivering results and a dedication to staying up-to-date on the latest technologies, I'm committed to creating <span className="purple">cutting-edge solutions that drive business growth and success</span>. <br /> <br />
</p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
