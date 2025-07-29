import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie"; // ✅ Add this

// ✅ Assuming this is your protected home page
import Signup from "./Landing_page/signup/Signup";
import Login from "./Landing_page/signup/Login";
import AboutPage from "./Landing_page/about/AboutPage";
import PricePage from "./Landing_page/price/PricePage";
import ProductPage from "./Landing_page/product/ProductPage";
import SupportPage from "./Landing_page/support/SupportPage";
import NotFound from "./Landing_page/NotFound";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import HomePage from "./Landing_page/home/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <CookiesProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/price" element={<PricePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CookiesProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
