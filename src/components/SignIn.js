import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {useHistory} from "react-router-dom"
import {useState} from 'react'
import Profile from './Profile'


const SignIn = () => {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleClick = () => {
    console.log(email, password);
    if (email == "" || password == "") {
      alert('please enter valid email and password')
    }
    else {
       window.localStorage.setItem(email,password);
       history.push('/profile')
    }
  }

   return (
    <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="8">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  onChange={onChangeEmail}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  onChange={onChangePassword}
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
                <a className = "forgot-pwd" href="/ForgotPassword">Forgot Password?</a>
              </Form.Floating>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Nav>
                <Button variant="primary" type="submit" onClick={handleClick}>Sign In</Button>  
                <Nav.Link href="https://www.google.com"><i class="fab fa-google payment-methods-footer"></i></Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>    
              </Nav>  
            </Col>
        </Row>
    </Container>
  );
}
export default SignIn;