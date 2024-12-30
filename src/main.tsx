import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import Cards from "./components/products/Cards";
import Servicces from "./components/Servicces/Servicces";
import JustSpace from "./components/JustSpace";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WhatClientSays from "./components/whatClientSays/WhatClientSays";
import GetInTouch from "./components/getInTouch/GetInTouch";
import AboutSection from "./pages/About";
import OrderPage from "./pages/TrackOrder";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
// import Admin from "./pages/Admin";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Cards />
            <Servicces />
            <WhatClientSays />
            <GetInTouch />
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <JustSpace /> <AboutSection />
          </>
        ),
      },
      {
        path: "services",
        element: (
          <>
            <JustSpace /> <Services />
          </>
        ),
      },
      {
        path: "services/:service",
        element: (
          <>
            <JustSpace />
            <ServicePage />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <JustSpace /> <Contact />
          </>
        ),
      },
      {
        path: "policy",
        element: (
          <>
            <JustSpace /> <PrivacyPolicy />
          </>
        ),
      },
      {
        path: "track-order",
        element: (
          <>
            <JustSpace /> <OrderPage />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <>
            <JustSpace /> <Auth />
          </>
        ),
      },
      {
        path: "mee",
        element: (
          <>
            <JustSpace /> <Profile />
          </>
        ),
      },
      // {
      //   path: "admin",
      //   element: (
      //     <>
      //       <JustSpace /> <Admin />
      //     </>
      //   ),
      // },
      {
        path: "/products/:product",
        element: (
          <>
            <JustSpace />
            <ProductPage />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <JustSpace />
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Page You Are Looking for Not Found</h1>

          <p>
            _____________________________________________________________________________
          </p>
        </div>
        <Footer />
      </>
    ),
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
