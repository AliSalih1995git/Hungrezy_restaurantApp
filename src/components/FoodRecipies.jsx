import React from "react";
import imageUrl from "../asssets/image/strokeImg.png";
import cake from "../asssets/image/Cake.jpeg";

function FoodRecipies() {
  return (
    <div>
      <div
        id="Recipies"
        className="bg-cover bg-right bg-no-repeat py-1 text-black font-bold"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "10%",
          marginLeft: 20,
        }}
      >
        <h1 className="mr-22">Food Recipes</h1>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <div className="px-2 py-1 mr-2 font-bold text-sm   bg-gray-200 rounded">
          All
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Break fast
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Lunch
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Dinner
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Dessert
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Beverages
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Bakes
        </div>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Cakes
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Cupcakes
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Pastry
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Ice creams
        </span>
      </div>
      <div className="flex">
        <div className="w-1/3 p-4">
          <img
            src={`${cake}`}
            alt="cake Image"
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex flex-col h-full">
            <h1 className="font-bold">Ingredients:</h1>
            <div className="flex h-500 justify-start p-2">
              <ul className="list-disc flex p-4 m-2 flex-wrap justify-between">
                <li className="py-2">
                  List item ddddddddddddddddddddddddddddd1
                </li>
                <li className="py-2">List item 2dddddddddddddd</li>
                <li className="py-2">List item 1ddddddddddddddd</li>
                <li className="py-2">List item 2ddddddddddddddddddddddddd</li>
                <li className="py-2">List item 1dddddddddddddddddddddddd </li>
                <li className="py-2">List item 2</li>
              </ul>
            </div>
            <h1 className="font-bold">Procedeure</h1>
            <div className="flex-1">
              <ul className="list-disc flex p-4 m-2 flex-wrap justify-between">
                <li className="py-2">List item 3</li>
                <li className="py-2">
                  List item gfdsgdsgsdgsgdfgdsfdsggsdsgsdgdsgsdgsdggdsg4
                </li>
                <li className="py-2">List item 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodRecipies;
