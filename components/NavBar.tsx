import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { categorySlugs } from "@/constants";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/">Breaking</Nav.Link>
            <Nav.Link as={Link} href="/search">Search</Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              {categorySlugs.map((slug, i) => (
                <NavDropdown.Item as={Link} href={`/categories/${slug}`} key={slug+i}>{slug}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;