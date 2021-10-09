import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../assets/Logo1.png";

const AddCart = () => {
  const [show, setShow] = useState(true);

  function addItem() {
    alert("Item added to Cart!");

    let totalItems = document.getElementById("cart");
    // Increase count of cart.
    totalItems.textContent = +totalItems.textContent + 1;
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Item added to cart</Alert.Heading>
        <p>Keep shopping?</p>
      </Alert>
    );
  }
  <Button onClick={() => setShow(true)}>Shop More</Button>;

  // render(<AlertDismissible />);
};

export default AddCart;
