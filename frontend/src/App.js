import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";
import Home from "pages/Home"
// import BlogIndex from "pages/BlogIndex";
import AboutUs from "pages/AboutUs";
import PopularAndRecentBlogPosts from "components/blogs/PopularAndRecentBlogPosts";
import BlogDetails from "./pages/BlogDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "pages/ContactUs";
import ThreeColSimple from "components/features/ThreeColSimple";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/blog/:slug" element={<BlogDetails />} />
          {/* <Route path="/blog2" element={<PopularAndRecentBlogPosts />} /> */}
          <Route path="/blog" element={<PopularAndRecentBlogPosts />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="blog/category/:name" element={<ThreeColSimple/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}