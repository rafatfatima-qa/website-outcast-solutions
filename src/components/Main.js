import AboutUs from './AboutUs';
import ContactUs from './ContactUs'
import Policies from './Policies'
import Profile from './Profile'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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