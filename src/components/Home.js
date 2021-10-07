import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import cylinder from "../assets/small-cylinder.png";
import { useHistory } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Home = () => {
  let history = useHistory();

  return (
    <>
      <Container>
        {/* First HomePage Section*/}
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <p className="home-page-heading">
                  {" "}
                  Not So Fast,
                  <br />
                  Natural <span className="home-page-heading-span">
                    Gas
                  </span>{" "}
                </p>
              </Card.Title>
              <Card.Text>
                <p className="home-page-text">
                  Our products comprise industrial gases<br />for commercial and consumer use
                </p>
                <Button className="btn" onClick={() => history.push("/addcart")}>Order Now</Button>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={cylinder} roundedCircle />
          </Card>
        </CardGroup>

        {/* Second HomePage Section: why-choose-us*/}
        <div className="section-heading why-choose-us-section">
          <h1>
            {" "}
            Why Choose <span className="home-page-heading-span">Us</span>?
          </h1>
        </div>

        {/* Third HomePage Section: Contact Us*/}
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Text>
                <p className="home-page-section-text">
                  Learn about the types of home{" "}
                  <span className="home-page-section-span">propane</span> tanks
                  you can install on
                </p>
              </Card.Text>
              <Button
                className="btn"
                onClick={() => history.push("/contactus")}
              >
                Contact Us <i class="fas fa-long-arrow-alt-right"></i>
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Img variant="top" src={cylinder} roundedCircle />
            </Card.Body>
          </Card>
        </CardGroup>

        {/* Fourth HomePage Section: Featured Products*/}
        <div className="section-heading">
          <h1>
            {" "}
            Featured <span className="home-page-heading-span">Products</span>
          </h1>
        </div>

        {/* These are links to filter products*/}
        <Nav className="justify-content-center" activeKey="/Categories">
          <Nav.Item>
            <Nav.Link href="/Categories">Show All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Fryers">Fryers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Cylinders">Cylinders</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Fifth HomePage Section*: ZipCode Section*/}
        <CardGroup>
          <Card className="radius-section">
            <Card.Body>
              <Card.Text>
                <p className="home-page-section-text">
                  Are you inside our radius?
                  <br />
                  Enter your{" "}
                  <span className="home-page-section-span">Zip Code</span> to
                  Find...
                </p>
              </Card.Text>
              
              <FloatingLabel
                controlId="floatingInput"
                label="Zip Code"
                className="mb-3"
                size="mb"
              >
                <Form.Control type="number" placeholder="xxxxx" />
              </FloatingLabel>
              <Button className="btn-go" onClick={() => history.push("/productlist")}>Go <i class="fas fa-long-arrow-alt-right"></i></Button>
            </Card.Body>
          </Card>

          <Card className="radius-section">
            <Card.Body>
              <Card.Img variant="top" src={cylinder} roundedCircle />
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default Home;
