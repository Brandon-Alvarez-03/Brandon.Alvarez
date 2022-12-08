import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body">
              Software engineer with an awesome background in tech and
              engineering. I fell in love with programming after taking my
              computer solutions course for engineers in college. I was far from
              being the best in my class... which only motivated me to work
              harder to gain confidence.
              <br />
              <br />
              Several years later, I was a supplemental instructor for a
              graduate level programming course for environmental engineers. The
              rest is history!
              <br />
              <br />I currently work with
              <i>
                <b className="gray">
                  {" "}
                  Javascript, Python, React.js, HTML, CSS{" "}
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONNECT WITH ME</h2>
            <br/>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Brandon-Alvarez-03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brandon-alvarez-03balv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
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