// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./Components/TopHeader";
import SliderWithContent from "./Components/SliderWithContent";
import ImageCard from "./Components/ImageCard";
import VideoCard from "./Components/VideoCard";
import EnquiryForm from "./Components/EnquiryForm";
import RatingsAndReviews from "./Components/RatingsAndReviews";
import CombinedFooter from "./Components/CombinedFooter";
import Footer from "./Components/Footer";
import Navbar from "./DynamicComponents/Navbar";
import ProductShowcase from "./DynamicComponents/ProductShowcase";
import ProductCarousel from "./DynamicComponents/ProductCarousel";
function App() {
  return (
    <Router>
      
     <TopHeader />
      <Routes>
        <Route path="/" element={  <div>  <SliderWithContent />  <ImageCard />  <VideoCard /> </div> } />
        <Route path="/home" element={  <div> <Navbar /> <ProductShowcase /><VideoCard /> < ProductCarousel /> </div> } />
        <Route path="/footer" element={  <div> <Navbar /><ImageCard /><VideoCard /> </div> } />

      </Routes>
            <EnquiryForm />
            <RatingsAndReviews />
            <CombinedFooter />
            <Footer />
    </Router>
  );
}

export default App;
