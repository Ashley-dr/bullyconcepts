import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { Comfortaa } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "700",
});

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6 md:px-12 drop-shadow-2xl">
      <div className="container bg-gradient-to-bl from-[#0f1221] via-[#111729] lg:w-[900px] to-[#091d40] mx-auto grid grid-cols-2 gap-12 p-5 px-26 rounded-xl ">
        {/* Contact Us Section */}
        <div>
          <div
            className={`${comfortaa.className} text-xl gap-5 relative top-10 grid font-semibold mb-5`}
          >
            <p>Personalize Your Car with Bully Concepts</p>
            <p className="text-sm">Connect with us</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          {/* <p className="text-xl font-semibold mb-5">Follow us</p> */}

          <div className="grid grid-cols-2 justify-items-center space-y-2 ">
            <div className="grid space-y-5 mt-5">
              <a
                href="https://www.facebook.com/bullyconcepts"
                target="_blank"
                rel="noreferrer"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <FaFacebookSquare size={25} color="white" />
                <p>Bullyconcepts </p>
              </a>
              <a
                href="mailto:bullyconceptscebu@gmail.com"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <Mail className="w-6 h-6" />
                <p>bullyconceptscebu@gmail.com</p>
              </a>
              <a
                href="https://www.instagram.com/bullyconcepts"
                target="_blank"
                rel="noreferrer"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <FaSquareInstagram size={25} color="white" />
                <p>@bullyconcepts</p>
              </a>
              <a
                href="tel:+09912100058"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <Phone className="w-6 h-6" />
                <p>0991 210 0058</p>
              </a>
            </div>
            <div className="relative top-27 space-y-5">
              <a
                href="https://www.youtube.com/@bullyconcepts"
                target="_blank"
                rel="noreferrer"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <IoLogoYoutube className="w-6 h-6" />
                <p>youtube.com/@bullyconcepts</p>
              </a>
              <a
                href="https://www.tiktok.com/@bullyconcepts"
                target="_blank"
                rel="noreferrer"
                className={`text-white flex gap-3 text-sm items-center transition duration-300 ${poppins.className}`}
              >
                <AiFillTikTok className="w-6 h-6" />
                <p>tiktok.com/@bullyconcepts</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Bullyconcepts. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
