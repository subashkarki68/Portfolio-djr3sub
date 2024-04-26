import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import djPlayer from "../../Assets/djplayer.gif";
import Particle from "../Particle";
import Timeline from "./Timeline";

function Home() {
  return (
    <section>
      <Particle />
      <Container className='home-content'>
        <Row>
          <Col md={7} className='home-header'>
            <h1 style={{ paddingBottom: 15 }} className='heading'>
              <span className='wave' role='img' aria-labelledby='wave'>
                🎵 🎶
              </span>
            </h1>

            <h1 className='heading-name'>
              I'm <strong className='main-name'> R3SUB</strong>, and music is my
              heartbeat. I live to craft unforgettable musical experiences—from
              high-energy beats to soulful melodies.
              <br />
              <span className='text-secondary'>-since 2016</span>
            </h1>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={djPlayer}
              alt='DJ Player'
              className='img-fluid'
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
      {/* <Home2 /> */}
      <h2 className='text-white'>
        The timeline below highlights my DJ career journey from 2016, starting
        with training and progressing to gigs in clubs and bars. However, it
        doesn't encompass my entire experience, as I've also performed at
        numerous private events and festivals. Explore the Gallery for more
        insights into my diverse portfolio.
        <Nav className='ms-auto' defaultActiveKey='#home'>
          <Nav.Item>
            <Nav.Link as={Link} to='/about'>
              <FaHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </h2>
      <Timeline />
    </section>
  );
}

export default Home;
