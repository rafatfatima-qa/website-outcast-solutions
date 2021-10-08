import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoriesCard = (props) => {
  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-100 shadow">
          <Card>
            <Card.Img variant="top" src={props.image} text="product-img" />
            <Card.Body>
              <Card.Title>{props.tag}</Card.Title>
              <Card.Title>{props.name}</Card.Title>
              <Card.Title>{props.price}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CategoriesCard;
