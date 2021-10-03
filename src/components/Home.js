import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import hose from '../assets/4 foot house.jpg';
import burner from '../assets/burner.jpg';
import fryer from '../assets/Fryer.png';
import Container from 'react-bootstrap/Container';
import cylinder from '../assets/small-cylinder.png';
import { useHistory } from "react-router-dom";

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
          <p className = "home-page-heading"> Not So Fast,
          <br /> 
          Natural <span className = "home-page-heading-span">Gas</span> </p>
        </Card.Title>
        <Card.Text>
          <p className = "home-page-text">
          Our products comprise industrial gases 
          <br /> 
          for commercial and consumer use
          </p>
          <Button className="btn" onClick={() => history.push('/placeorder')}>Order Now</Button>
        </Card.Text>
      </Card.Body> 
    </Card>
    <Card>
    <Card.Img variant="top" src={cylinder} roundedCircle/>
    </Card>
  </CardGroup> 

  {/* Second HomePage Section*/}
        <div className = "section-heading why-choose-us-section">
          <h1> Why Choose <span className = "home-page-heading-span">Us</span>?</h1>
        </div>

   {/* Third HomePage Section*/}      
  <CardGroup>
    <Card>
    <Card.Body>
      <Card.Text>
       <p className = "home-page-section-text">
        Learn about the types of home <span className = "home-page-section-span">propane</span> tanks you can install on
        </p>
      </Card.Text>
      <Button className="btn" onClick={() => history.push('/placeorder')}>Contact Us <i class="fas fa-long-arrow-alt-right"></i></Button>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={cylinder} roundedCircle />
    </Card.Body> 
    </Card>
  </CardGroup>          
  
  {/* Fourth HomePage Section*/}
  <div className = "section-heading">
          <h1> Featured <span className = "home-page-heading-span">Products</span></h1>
        </div>
  <CardGroup>
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={hose} roundedCircle />
        <Card.Text>
          Product Description
        </Card.Text>
      </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={burner} roundedCircle />
      <Card.Text>
      Product Description
      </Card.Text>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={fryer} roundedCircle />
      <Card.Text>
      Product Description
      </Card.Text>
    </Card.Body> 
    </Card>
    
  </CardGroup>
        
  {/* Fifth HomePage Section*/}
  <CardGroup>
    <Card className = "radius-section">
    <Card.Body>
      <Card.Text>
      <p className = "home-page-section-text">Are you inside our radius?
      <br />
      Enter your <span className = "home-page-section-span">Zip Code</span> to Find...</p>
      </Card.Text>  
      <input className = "col-xs-3" type="text" id = "zipcode" placeholder = "Zip Code" />
      <Button className="btn-go" onClick={() => history.push('/placeorder')}>Go <i class="fas fa-long-arrow-alt-right"></i></Button>
    </Card.Body> 
    </Card>  
    </CardGroup>  

  </Container>
    </>
  );
}
export default Home;