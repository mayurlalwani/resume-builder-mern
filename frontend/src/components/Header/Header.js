import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "./Header.css";
import { forwardRef, useState } from "react";
import GenericPdfDownloader from "../HtmlToPdf";

const Header = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const [download, setDownload] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <span className="menu-items">HOME</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto"></Nav>
          {userInfo ? (
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/resume">
                  <span
                    className="menu-items"
                    onClick={() => ref.current.handleSave()}
                  >
                    SAVE
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <GenericPdfDownloader
                  rootElementId="resume-template"
                  downloadFileName="resume"
                />
              </Nav.Link>

              <NavDropdown
                title={userInfo?.name}
                id="navbarScrollingDropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">
                  <span className="menu-items">LOGIN</span>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
export default Header;
