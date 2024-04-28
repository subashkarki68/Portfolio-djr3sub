import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'></Col>
        <Col md='4' className='footer-copywright'>
          <h3>© {year} DJ R3SUB</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/djresub'
                style={{ color: "white" }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
