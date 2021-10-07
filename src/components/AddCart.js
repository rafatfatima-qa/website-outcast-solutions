import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../assets/Logo1.png";

const AddCart = () => {
  function addItem() {
    alert("Item added to Cart!");

    let totalItems = document.getElementById("cart");
    // Increase count of cart.
    totalItems.textContent = +totalItems.textContent + 1;
  }

  function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Item Added to Cart</Alert.Heading>
          <p>Keep Shopping?</p>
          <p>Checkout?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Dismiss
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }

  render(<AlertDismissible />);
};
export default AddCart;
