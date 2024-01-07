import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">NOBARIN</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trending">TRENDING</Nav.Link>
              <Nav.Link href="#drama">DRAMA</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}

export default NavigationBar