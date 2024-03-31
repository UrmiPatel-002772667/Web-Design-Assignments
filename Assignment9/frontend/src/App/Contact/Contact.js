import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ContactCard from "./ContactCard";
const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <h3>Contact</h3> */}
      <ContactCard />
    </div>
  );
};
export default Contact;
