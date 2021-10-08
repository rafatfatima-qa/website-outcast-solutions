import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    console.log(email, password);
    if (email == "" || password == "") {
      alert("please enter valid email and password");
    } else {
      window.localStorage.setItem(email, password);
      //  history.push('/profile')
    }
  };
  return (
    <div className="maincontainer mb-5 p-5">
      <div class="container-fluid">
        <div class="row no-gutter">
          {/* <div class="col-md-6 d-none d-md-flex bg-image-signup"></div> */}

          <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-8 mx-auto">
                    <h3
                      style={{ color: "#3C3B6E" }}
                      class="display-4 text-center"
                    >
                      Sign Up
                    </h3>
                    <p class="text-muted mb-4">
                      Please fill the login information
                    </p>
                    <form>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="username" />
                      </FloatingLabel>
                      <Form.Floating className="mb-3 ">
                        <Form.Control
                          className=" form "
                          id="floatingInputCustom"
                          type="email"
                          placeholder="name@example.com"
                          onChange={onChangeEmail}
                        />

                        <label htmlFor="floatingInputCustom">
                          Email address
                        </label>
                      </Form.Floating>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Address"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="1234 Main St" />
                      </FloatingLabel>
                      <Form.Floating>
                        <Form.Control
                          className="mb-3 form"
                          id="floatingPasswordCustom"
                          type="password"
                          placeholder="Password"
                          onChange={onChangePassword}
                        />
                        <label htmlFor="floatingInputCustom">Password</label>
                      </Form.Floating>

                      <FloatingLabel
                        controlId="floatingPassword"
                        label="Confirm Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          placeholder="(xxx) xxx-xxxx"
                        />
                      </FloatingLabel>

                      <div class="custom-control custom-checkbox ml-3 mb-3">
                        <Form.Group className="mb-3" id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                      </div>
                      <Button
                        style={{ width: "100%" }}
                        type="submit"
                        class=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign Up
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
