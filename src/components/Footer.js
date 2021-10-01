import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import logo from '../assets/Logo1.png';
import { useHistory } from "react-router-dom";

const Home = () => {

  let history = useHistory();

  return (

  <Container>
    

    <CardGroup>

    {/* Column 1*/}
    <Card className = "footer">
    <div className = "footer-column-heading">
    <Card.Img variant="top" src={logo} roundedCircle/>
    </div>
    </Card>   

    {/* Column 2*/}
    <Card className = "footer">
    <Card.Body >
    <div className = "footer-column-heading">
    <Card.Title>Categories</Card.Title>
   
      <Card.Text>
        <ul className = 'list-unstyled'>
          <li><a href="#burners" target="_blank">Burners</a></li>
          <li><a href="#tanks" target="_blank">Tanks</a></li>
          <li><a href="#burners" target="_blank">Burners</a></li>
          <li><a href="#tanks" target="_blank">Tanks</a></li>
          <li><a href="#burners" target="_blank">Burners</a></li>
          <li><a href="#tanks" target="_blank">Tanks</a></li>
        </ul>
      </Card.Text>
      </div>
    </Card.Body> 
    </Card>  

    {/* Column 3*/}
    <Card className = "footer">
    <Card.Body>
    <div className = "footer-column-heading">
    <Card.Title>Quick Links</Card.Title>
    
      <Card.Text>
      <ul className = 'list-unstyled'>
          <li><a href="#aboutus" target="_blank">About Us</a></li>
          <li><a href="#shipping" target="_blank">Shipping & Returns</a></li>
          <li><a href="#policies" target="_blank">Privacy & Policies</a></li>
          <li><a href="#contactus" target="_blank">Contact Us</a></li>
      </ul>
      </Card.Text>
      </div>
    </Card.Body> 
    </Card>  

    {/* Column 4*/}
    <Card className = "footer">
    <Card.Body>
      <div className = "footer-column-heading">
    <Card.Title>Address</Card.Title>
    
      <Card.Text>
      Got Questions?
      Call us 24/7! : +1786-290-3000
      Visit us anytime!
      1005 N.W. 119th Street, North Miami, FL 33168
      <div>
      <i class="fab fa-facebook-square social-media-footer"></i>
      {' '}
      <i class="fab fa-linkedin social-media-footer"></i>
      {' '}
      <i class="fab fa-youtube-square social-media-footer"></i>
      </div>
      </Card.Text>
      </div>
    </Card.Body> 
    </Card>
  </CardGroup> 
    
    
    <CardGroup> 
    {/* Last row, column 1*/}
    <Card className = "footer">
    <Card.Body>
    <hr />
    <Card.Text><p>All Rights Reserved © 24/7 Propane | Developed and Managed by Outcast Solutions</p></Card.Text>
    </Card.Body> 
    </Card>   

    {/* Last row, column 2*/}
    <Card className = "footer">
    <Card.Body>
    <Card.Text>
    <div className = "payment-methods-footer">
    <hr />
    <i class="fab fa-cc-paypal"></i>
    {' '}
    <i class="fab fa-cc-visa"></i>
    {' '}
    <i class="fab fa-cc-discover"></i>
    {' '}
    <i class="fab fa-cc-mastercard"></i>
    </div>
    </Card.Text>
    </Card.Body> 
    </Card> 
    
    </CardGroup> 
    
  </Container>
 
   
  );
}
export default Home;