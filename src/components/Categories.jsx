import React, { useEffect, useState } from "react";
import imageUrl from "../asssets/image/strokeImg.png";
import bake1 from "../asssets/image/bake1.png";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [categories, setCategories] = useState("snaks");
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await axios.get(`/product?category=${"snacks"}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndpoint]);

  console.log(filteredFoods, "filteredFoods");
  return (
    <div id="categories">
      <div
        className="bg-cover bg-right bg-no-repeat py-1 mt-8 text-black font-bold"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "10%",
          marginLeft: 20,
        }}
      >
        <h1 className="mr-22">Food Categories</h1>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <div className="px-2 py-1 mr-2 font-bold text-sm   bg-gray-200 rounded">
          All
        </div>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around pt-4">
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Cakes
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Cupcakes
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Pastry
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Ice creams
        </span>
      </div>

      <div className="flex justify-between flex-wrap w-full pt-8 pb-10 ">
        {filteredFoods.length !== 0 ? (
          filteredFoods.map((f) => (
            <Link
              to={`/food/${f._id}`}
              key={f._id}
              className="p-4 w-60 h-60 m-4 bg-blue-300 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
            >
              <div className="flex flex-wrap justify-around ">
                <div className="flex  justify-between ">
                  <AiOutlineHeart className=" pl-2 w-10 h-10" />
                  <span>
                    <AiTwotoneStar fill="#FAD26B" className="pl-2 w-9 h-9" />{" "}
                    5.4{" "}
                  </span>
                </div>
                <div>
                  <Link to="">
                    <img
                      src={`/images/${f?.img}`}
                      alt="food"
                      className="w-28 h-28 rounded-3xl"
                    />{" "}
                  </Link>
                </div>
              </div>
              <Link to="">
                <h1 className="text-center font-bold text-xl">{f?.title}</h1>
              </Link>
              <div className="flex justify-around">
                <span>₹ {f?.price}</span>
                <span>Add to cart</span>
              </div>
            </Link>
          ))
        ) : (
          <h1 className=""> No {foodEndpoint} right now</h1>
        )}
      </div>
      <div className="flex justify-center items-center mb-8">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full tracking-widest w-48 h-12">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Categories;
