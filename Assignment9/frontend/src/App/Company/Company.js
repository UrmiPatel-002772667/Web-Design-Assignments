import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import companyList from "./companyList";

const Company = () => {
 /* useEffect(() => {
    const uploadImage = async () => {
      try {
        const response = await axios.post('/user/uploadImage/urmi@northeastern.edu', formData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the uploadImage function when the component mounts
    uploadImage();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
*/
  return (
    <div>
      <Navbar />
      <Container className="text-center">
        <h1 style={{ marginTop: "50px" }}>Companies</h1>
        <div style={{ marginLeft: "25%" }}>
          {companyList.map((item) => (
            <div key={item.id}> {/* Ensure each element has a unique key */}
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
      </Container>
    </div>
  );
};

export default Company;
