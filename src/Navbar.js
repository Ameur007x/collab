import React, { useMemo } from "react";
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

const CustomNavbar = () => {
  // Memoize static navigation items
  const navLinks = useMemo(() => [
    { href: "#", text: "Home", className: "text-primary fw-bold" },
    { href: "#", text: "Find Job" },
    { href: "#", text: "Employers" },
    { href: "#", text: "Candidates" },
    { href: "#", text: "Pricing Plans" },
    { href: "#", text: "Customer Supports" }
  ], []);

  return (
    <Navbar expand="lg" className="bg-light px-4 shadow-sm">
      <Navbar.Brand href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="Jobpilot Logo"
          width="30"
          className="me-2"
          loading="lazy" // Add lazy loading for images
        />
        <span className="fw-bold">Jobpilot</span>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-4">
          {navLinks.map(({ href, text, className = "" }) => (
            <Nav.Link key={text} href={href} className={className}>
              {text}
            </Nav.Link>
          ))}
        </Nav>

        {/* Rest of the code remains the same but with lazy loading added to images */}
        <Form className="d-flex ms-auto me-3">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="India"
                width="20"
                className="me-1"
                loading="lazy"
              />
              India
            </Dropdown.Toggle>
          </Dropdown>
          
          <FormControl 
            type="search" 
            placeholder="Job title, keyword, company" 
            className="ms-2" 
          />
        </Form>

        <div className="d-flex align-items-center">
          <FaPhone className="me-2" />
          <span>+1-202-555-0178</span>
        </div>

        <Dropdown className="ms-3">
          <Dropdown.Toggle variant="light">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English"
              width="20"
              className="me-1"
              loading="lazy"
            />
            English
          </Dropdown.Toggle>
        </Dropdown>

        <Button variant="outline-primary" className="ms-3">Sign In</Button>
        <Button variant="primary" className="ms-2">Post A Job</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default React.memo(CustomNavbar);
