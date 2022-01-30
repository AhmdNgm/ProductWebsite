import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
