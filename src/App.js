import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import NotFound from "./components/pages/notfound/NotFound";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ServicesDetails from "./components/pages/serviceDetails/ServicesDetails";
import Blogs from "./components/pages/blogs/Blogs";
import Contact from "./components/pages/contact/Contact";

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
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <ServicesDetails></ServicesDetails>
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
