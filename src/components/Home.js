import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import logo from '../assets/Logo1.png';
import Container from 'react-bootstrap/Container';
import cylinder from '../assets/cylinder.jpg';
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
      <Card.Title>Not So Fast,
                  <br /> 
                  Natural Gas
      </Card.Title>
      <Card.Text>
      Our products comprise industrial gases 
      <br /> 
      for commercial and consumer use
      </Card.Text>
      <Button className="btn" onClick={() => history.push('/placeorder')}>Order Now</Button>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Img variant="top" src={cylinder} roundedCircle/>
    </Card>

  </CardGroup> 

  {/* Second HomePage Section*/}
  <CardGroup>
    <Card>
    <Card.Body>
    <Card.Img variant="top" src={logo} roundedCircle />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={logo} roundedCircle />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={logo} roundedCircle />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body> 
    </Card>
    
  </CardGroup>   
  
  {/* Third HomePage Section*/}
  <CardGroup>
    <Card>
    <Card.Body>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button className="btn" onClick={() => history.push('/placeorder')}>Contact Us</Button>
    </Card.Body> 
    </Card>

    <Card>
    <Card.Body>
    <Card.Img variant="top" src={logo} roundedCircle />
    </Card.Body> 
    </Card>
  </CardGroup>  

   {/* Fourth HomePage Section*/}
  <CardGroup>
    <Card>
    <Card.Body>
      <Card.Text>
        Are you inside our radius? Check it Now!
      </Card.Text>
      <Button className="btn" onClick={() => history.push('/placeorder')}>Go -></Button>
    </Card.Body> 
    </Card>  
    </CardGroup>  

  </Container>
    </>
  );
}
export default Home;