import AboutUs from './AboutUs';
import ContactUs from './ContactUs'
import Policies from './Policies'
import Profile from './Profile'
import Home from './Home'
import ProductList from './ProductList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';


const Main = () => {
    return (
<Router> 
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/website-outcast-solutions">
        <Home />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/productlist">
        <ProductList />
      </Route>
          
      <Route exact path="/aboutus">
        <AboutUs />
      </Route> 

      <Route path="/contactus">
        <ContactUs />
      </Route>

      <Route path="/policies">
        <Policies />
      </Route>
      
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch> 
</Router> 
);
}

export default Main;