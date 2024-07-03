import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'
import { Login } from "./routes/Login";
import { Products } from "./routes/Products";
import { Options } from "./routes/Options";

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/options" element={<Options></Options>} />

      </Routes>
    </Suspense>
  );
}

export default App;
