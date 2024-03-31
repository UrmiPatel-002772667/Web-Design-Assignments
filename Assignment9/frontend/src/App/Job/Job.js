import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Accordion, Button } from "react-bootstrap";
import JobPostings from "./JobPostings";

const Job = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="text-center py-3">Job Postings</h1>
        <Accordion>
          {JobPostings.map((item, idx) => (
            <Accordion.Item eventKey={idx}>
              <Accordion.Header>
                <strong>{item.title}</strong>
              </Accordion.Header>
              <Accordion.Body>
                <p>{item.description}</p>
                <p>{item.lastUpdated}</p>
                <p>{item.applyLink}</p>
                <Button className="btn btn-success">Apply</Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};
export default Job;
