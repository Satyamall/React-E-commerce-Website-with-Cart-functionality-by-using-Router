import { Route, Switch } from "react-router-dom";
import About from "../Components/About";
import Account from "../Components/Account";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Kid from "../Components/Kid";
import Men from "../Components/Men";
import SignIn from "../Components/SignIn";
import Women from "../Components/Women";
import Cart from "../Components/Cart";

export default function AllRoutes(){

    return(
        <>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/men">
                <Men/>
              </Route>
              <Route exact path="/women">
                <Women/>
              </Route>
              <Route exact path="/kid">
                <Kid/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/faq">
                <Faq/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/account">
                <Account/>
              </Route>
              <Route exact path="/sign">
                <SignIn/>
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route>
                <h1>404 not found page</h1>
              </Route>
          </Switch>
        </>
    )
}