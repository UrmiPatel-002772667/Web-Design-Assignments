import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import people from "./People";
const About = () => {
  return (
    <div>
      <Navbar />
      <Container className="text-center">
        <h1 style={{ marginTop: "50px" }}>Meet our team</h1>
        {/* <CardGroup style={{ width: "rem" }}> */}
        <div style={{ marginLeft: "25%" }}>
          {people.map((item) => (
            <div>
              <br />
              <Card className="text-center" style={{ width: "40rem" }}>
                <Card.Img variant="center" src={item.photo} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{item.subtext}</small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
        {/* </CardGroup> */}
      </Container>
    </div>
  );
};
export default About;
