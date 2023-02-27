import React from "react";
import Categories from "./Categories";
import FoodRecipies from "./FoodRecipies";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="h-auto bg-gradient-to-r from-rose-100 to-teal-100">
      <HeroSection />
      <Categories />
      <FoodRecipies />
    </div>
  );
}
export default Home;
