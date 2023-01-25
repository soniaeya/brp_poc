import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MyNavbar.css"

function MyNavbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar className="flex-column" bg="light" expand="lg">
      <Container>
      <NavDropdown.Item href="#">HOMEPAGE</NavDropdown.Item>
      <NavDropdown.Item href="#">SCENARIO CREATION</NavDropdown.Item>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;