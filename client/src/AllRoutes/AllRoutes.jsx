import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductPage from '../Pages/ProductPages';
import ProductDetailsPage from '../Pages/ProductDetailsPage';

const AllRoutes = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<ProductPage />} />
                  <Route path="/productdetail" element={<ProductDetailsPage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default AllRoutes