import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container >
        <Row className="align-items-center" >
          <div class="container1" >
            <img width="100%" src="https://images.unsplash.com/photo-1458253756247-1e4ed949191b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Snow" ></img>
            <div class="bottom-left">Good Taste</div>
            <div class="bottom-left1">to eat and drink</div>
            <div class="bottom-left2">
              <a href="#" className="btn btn-warning">
                ORDER NOW
              </a>
            </div>
          </div>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;