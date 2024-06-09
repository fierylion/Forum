import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Thread from "./pages/Thread/Thread.jsx";
const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/:id" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter