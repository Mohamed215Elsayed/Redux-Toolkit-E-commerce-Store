import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FiltredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  //   const cart = useSelector((state) => state.cart.cart);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // console.log(cart, totalPrice, totalAmount);
 
  // const user = useSelector((state) => state.user.user);
  // const { authUser } = user;
  const user = useSelector((state) => state.user ? state.user.user : null);
const authUser = user ? user.authUser : null;
    console.log("user",user);
  console.log("authUser",authUser); 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ?<Main></Main>:<Login></Login>}
          ></Route>
          {/* <Route
            path="/login"
            element={<Login></Login>}
          ></Route>
          <Route
            path="/"
            element={<Main></Main>}
          ></Route> */}
          

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
