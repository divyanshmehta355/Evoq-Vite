import React, { useState, useEffect } from "react";
import {EVOQ_LOGO} from "../constants/images";

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          src={EVOQ_LOGO} // Use the standard <img> tag
          alt="Evoq Logo"
          className="h-16 md:h-[150px] w-auto mb-4 md:mb-0"
        />
        {showButton && (
          <button
            className="text-black rounded-lg p-4 bg-white hover:bg-gray-200 transition duration-300 mb-4 md:mb-0"
            onClick={scrollToTop}
          >
            Back To Top
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full mt-8">
        {/* Services, Social Media, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-3/5 p-4">
          <ul className="text-center">
            <li className="font-bold">Our Services</li>
            <li className="p-2">UI UX Design</li>
            <li className="p-2">Web Development</li>
            <li className="p-2">Content Creation</li>
          </ul>
          <ul className="text-center">
            <li className="font-bold">Social Media</li>
            <li className="p-2">Instagram</li>
            <li className="p-2">LinkedIn</li>
            <li className="p-2">Twitter</li>
          </ul>
          <ul className="text-center">
            <li className="font-bold">Contact</li>
            <li className="p-2">+91 1234567890</li>
            <li className="p-2">contact@evoq.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center mt-8 md:mt-0">
          <p className="font-bold mb-2">Subscribe Our Newsletter</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="user@gmail.com"
              className="bg-transparent border-b-2 border-green-500 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="text-white bg-green-500 px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t mt-8 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-around text-center p-2 mt-4">
        <p className="mb-2 md:mb-0">Terms & Conditions</p>
        <p className="mb-2 md:mb-0">Privacy Policy</p>
        <p>© 2025 Evoq. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
