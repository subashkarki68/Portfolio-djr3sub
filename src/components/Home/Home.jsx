import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import djPlayer from "../../Assets/djplayer.gif";
import Particle from "../Particle";
import Timeline from "./Timeline";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Particle />
      <Container className='home-content'>
        <h3>Current Favourite Genres:</h3>
        <Type />
        <br />
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
      <Container>
        <h3 className='text-white'>
          My DJ career began in 2016 with training, leading to gigs in clubs and
          bars. This timeline doesn't cover all my experiences—I've also
          performed at private events and festivals. For more on my diverse
          portfolio, click below :
          <span className='ms-2 me-2'>
            <Nav.Link as={Link} to='/gallery' className='text-primary'>
              Gallery
            </Nav.Link>
          </span>
        </h3>
      </Container>
      <Timeline />
    </section>
  );
}

export default Home;
