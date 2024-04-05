import React from "react";
import Image from "next/image";
import Farm from "../../../../public/assets/farm 3.jpg";

interface Cards {
  title: string;
  name: string;
  image: string;
}
const cardItem: Cards[] = [
  {
    title: "Feature 001",
    name: "We're using a new technology",
    image: "../../../../public/assets/farm 3.jpg",
  },
  {
    title: "Feature 002",
    name: "Good in smart organic services",
    image: "../../../../public/assets/farm 1.jpg",
  },
  {
    title: "Feature 003",
    name: "Reforming in the systems",
    image: "../../../../public/assets/farm 2.jpg",
  },
];

const CardItem = ({ title, name, image }: Cards) => {
  return (
    <div className="rounded-lg w-[370px] h-[264px] px-9 pt-10  bg-white z-10 bottom-10 relative shadow-xl">
      <div className="">
        <p className="text-sm text-yellow-400 font-medium">{title}</p>
        <h3 className="text-xl font-semibold">{name}</h3>
        <Image
          src={`/assets/farm 3.jpg`}
          alt=""
          width={100}
          height={85}
          className="rounded-md mt-2"
        />
      </div>
    </div>
  );
};

const cardItems = () => {
  return (
    <>
      <section className="w-full">
        <div className="flex justify-between gap-4 w-[80%] mx-auto">
          {" "}
          {/* Adjust grid layout as needed */}
          {cardItem.map((card: any) => (
            <CardItem key={card.title} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default cardItems;
