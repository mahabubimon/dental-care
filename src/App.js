import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/pages/login/Login";
import NotFound from "./components/pages/notfound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Services from "./components/pages/services/Services";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ServicesDetails from "./components/pages/serviceDetails/ServicesDetails";

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
            <PrivateRoute path="/service/:id">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
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
