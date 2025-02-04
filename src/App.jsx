import React from "react";
import { useState } from "react";

import "./App.css";
import FeaturedJobs from "./components/elementor";
import JobListing from "./components/elementorTitle";
import Navbar from "./components/Navbar/Navbar";
import PopularJobCategories from "./components/elementor/PopularJobCategories";
import TestimonialsOurCustomers from "./components/elementor/TestimonialsOurCustomers";
import NewsArticles from "./components/elementor/newsArticles";
import FooterSection from "./components/Footer";

function App() {

  return (
    <>
    <Navbar/>
    <PopularJobCategories/>
     <FeaturedJobs/>
     <TestimonialsOurCustomers/>
     <JobListing/>
     <NewsArticles/>
    <FooterSection/>
   
    </>
  );
}

export default App;
