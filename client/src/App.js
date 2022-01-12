import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Homepage from "./pages/HomePage/Homepage";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser.js";
import ProductList from "./pages/ProductList/ProductList.js";
import Product from "./pages/Product/Product.js";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
