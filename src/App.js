import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";
import NotFound from "./components/pages/notfound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Services from "./components/pages/services/Services";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
