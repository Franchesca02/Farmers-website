import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/logos/logo 1.png";
import styles from "./mainNav.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaVoicemail,
  FaPhone,
} from "react-icons/fa";
// import { FaInbox, FaMapLocation } from "react-icons/fa6";
import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-3">
      <div className="flex justify-between">
        <Image
          src={Logo}
          alt="logo"
          className="w-20 h-120 rounded-full"
        ></Image>

        {/* <div className=""> */}
        <div className="flex justify-between mt-5">
          {/* <div className="px-2"> */}
          <a href="#" className="rounded-full w-7 h-7 bg-gray-100 mx-3">
            <FaFacebook size="18px" color="black" className="mt-1 ml-1" />
          </a>
          {/* </div> */}
          <a href="#" className="rounded-full w-7 h-7 bg-gray-100 mx-3">
            <FaTwitter size="18px" color="black" className="mt-1 ml-1" />
          </a>
          <a href="#" className="rounded-full w-7 h-7 bg-gray-100 mx-3">
            <FaPinterest size="18px" color="black" className="mt-1 ml-1" />
          </a>
          <a href="#" className="rounded-full w-7 h-7 bg-gray-100 mx-3">
            <FaInstagram size="18px" color="black" className="mt-1 ml-1" />
          </a>
        </div>

        <div className="flex px-1 mt-5">
          <div>
            <FaPhone size="25px" color="green" />
          </div>
          <div className="block px-3">
            <p className="text-xs text-gray-400">Call anytime</p>
            <p className="text-sm textbl">+2348069347992</p>
          </div>
        </div>
        <hr className={styles.vertical} />
        <div className="flex px-1 mt-5">
          <div>
            <IoMailOpenOutline size="30px" color="green" />
          </div>
          <div className="block px-3">
            <p className="text-xs text-gray-400">Send Email</p>
            <p className="text-sm textbl">ihuoma.franchesca@gmail.com</p>
          </div>
        </div>
        <hr className={styles.vertical} />
        <div className="flex px-1 mt-5">
          <div>
            <IoLocationOutline size="30px" color="green" />
          </div>
          <div className="block px-3">
            <p className="text-xs text-gray-400">33 Taike Str.</p>
            <p className="text-sm textbl">Ikosi, Lagos, Nigeria</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
