import React from "react";
import logo from "../asssets/icons/hungrezy_logo 1.svg";

function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 text-center py-6">
          <div className="w-1/2 flex justify-between items-center">
            <img src={logo} alt="logo" className="w-24 mb-4" />
            <h4 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hungrezy
            </h4>
          </div>
          <p className="text-sm font-medium text-left	pl-8">
            Our job is to fill the your tummy with delicious of your choice.
          </p>
          <div className="flex items-center justify-center">
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center py-6">
          <h5 className="text-lg font-medium mb-4">About</h5>
          <ul className="list-none">
            <li className="text-sm font-medium mb-2">About Us</li>
            <li className="text-sm font-medium mb-2">Features</li>
            <li className="text-sm font-medium mb-2">News</li>
            <li className="text-sm font-medium mb-2">Menu</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center py-6">
          <h5 className="text-lg font-medium mb-4">Support</h5>
          <ul className="list-none">
            <li className="text-sm font-medium mb-2">Account</li>
            <li className="text-sm font-medium mb-2">Support Center</li>
            <li className="text-sm font-medium mb-2">Feedback</li>
            <li className="text-sm font-medium mb-2">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center py-6">
          <h5 className="text-lg font-medium mb-4">Get in Touch</h5>
          <form>
            <input
              className="bg-gray-200 text-white p-2 rounded-lg w-full mb-4"
              type="text"
              placeholder="Feedback"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full tracking-widest">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
