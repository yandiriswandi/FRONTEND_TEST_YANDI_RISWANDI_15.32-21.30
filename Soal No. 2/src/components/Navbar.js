import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import {
  Link,
  useNavigate
} from "react-router-dom"

export default function Nav() {
  return (
    <div>
    <Navbar className="border-bottom border-dark">
      <Container>
        <Navbar.Brand  as={Link} to="/home" href="/home">DASHBOARD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text as={Link} to="/" >
           <a href="#login" className='font-weight-bold'>Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
