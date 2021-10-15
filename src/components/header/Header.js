import {Navbar, Nav, Container, Row, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from "react-router-dom";

function Header() {
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>SunriseMarket</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            <LinkContainer to="/tile-adhesive">
                                <NavDropdown.Item>Tile adhesive</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/primer">
                                <NavDropdown.Item>Primer</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/drywall">
                                <NavDropdown.Item>Drywall</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to="/else">
                                <NavDropdown.Item>Something else here</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;