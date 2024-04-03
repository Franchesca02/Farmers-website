import Dropdown from "./dropDown";
import Link from "next/link";
import React from "react";

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
    route: "/services/about",
  },
  {
    title: "Services",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
    ],
  },
  {
    title: "Projects",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
    ],
  },
  {
    title: "News",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
    ],
  },
  {
    title: "Shop",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
      {
        title: "Contact",
        route: "/contact",
      },
    ],
  },
];
const subNav = () => {
  return (
    <div className="flex w-full">
      <header className="flex gap-10 items-center bg-zinc-200 py-4 px-2 w-[80%]">
        <Link href="https://designly.biz" target="_blank">
          {/* <Image src="/logo.svg" width={200} height={20} alt="logo" /> */}
        </Link>
        <div className="flex gap-8 items-center text-zinc-600">
          {menuItems.map((item) => {
            return item.hasOwnProperty("children") ? (
              <Dropdown item={item} />
            ) : (
              <Link className="hover:text-blue-500" href={item?.route || ""}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </header>
      <div className="bg-zinc-200 w-[20%]">cart and orders</div>
    </div>
  );
};

export default subNav;
