import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="md" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <>
            <img
              className="navbar-logo"
              src="imagens/icones/logo_playbay.png"
              alt="logo"
            />{" "}
          </>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Produtos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Video Games</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Jogos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Acessórios</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Roupas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">Lançamentos</Nav.Link>
            <Nav.Link href="#action7">Contato</Nav.Link>
            <Nav.Link href="#action8">Meus Pedidos</Nav.Link>
          </Nav>

          <img
            className="navbar-carrinho"
            src="imagens/icones/icone_carrinho.png"
            alt="logo"
          />

          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
