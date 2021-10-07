import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CategoriesCard({
  name,
  image,
  isLiked,
  tag,
  price,
}) {
  return (
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
          <Card style={{ width: '13rem' }}>
          <Card.Img variant="top" src= {image} text = "product-img"/>
          <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Title>Tag: {tag}</Card.Title>
          <Card.Title>Price: {price}</Card.Title>
          {/* <Button variant="primary" size="sm"  onClick = {() => addCart()}>Add</Button> */}
          </Card.Body>
          </Card>
          </Col>
    ))}
         </Row>
      </Container>
   
  );
}