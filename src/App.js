import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component.jsx";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubScribeFromAuth = null;
  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
