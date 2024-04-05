import Dropdown from "./dropDown";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Services",
    children: [
      {
        title: "Agriculture products",
        route: "/services",
      },
      {
        title: "Organic products",
        route: "/services",
      },
      {
        title: "Fresh vegetables",
        route: "/services",
      },
      {
        title: "Dairy products",
        route: "/services",
      },
      {
        title: "Harvest",
        route: "/services",
      },
    ],
  },
  {
    title: "Projects",
    children: [
      {
        title: "Easy harvestsing",
        route: "/projects",
      },
      {
        title: "Agricultural farming",
        route: "/projects",
      },
      {
        title: "Ecological farming",
        route: "/projects",
      },
      {
        title: "Organic solutions",
        route: "/projects",
      },
      {
        title: "Fresh products",
        route: "/projects",
      },
      {
        title: "Healthy foods",
        route: "/projects",
      },
    ],
  },
  {
    title: "News",
    children: [
      {
        title: "Bringing food production back to cities",
        route: "/news",
      },
      {
        title: "The future of farming, smart irrigation solutions",
        route: "/news",
      },
      {
        title: "Agronomy and relation to other sciences",
        route: "/news",
      },
    ],
  },
  {
    title: "Shop",
    children: [
      {
        title: "Tomato",
        route: "/shop",
      },
      {
        title: "Apples",
        route: "/shop",
      },
      {
        title: "Grapes",
        route: "/shop",
      },
    ],
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const SubNav = () => {
  return (
    <>
      <header className="flex gap-10 items-center justify-center bg-zinc-100 py-4 px-2 w-full">
        <Link href="https://designly.biz" target="_blank">
          {/* <Image src="/logo.svg" width={200} height={20} alt="logo" /> */}
        </Link>
        <div className="flex gap-8 items-center text-zinc-600">
          {menuItems.map((item) => {
            return item.hasOwnProperty("children") ? (
              <div className="relative flex">
                <Dropdown item={item} />
                <RiArrowDropDownLine
                  size="22px"
                  color="#52525b"
                  className="mt-1"
                />
              </div>
            ) : (
              <Link className="hover:text-green-500" href={item?.route || ""}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <hr className="w-[1px] border-l-[1px] border-s-[#dad9d9] min-h-[60px]" />
        <div className="flex gap-7">
          <FaSearch size="20px" color="#52525b" />
          <FaCartPlus color="#52525b" size="20px" className="" />
        </div>
      </header>
    </>
  );
};

export default SubNav;
