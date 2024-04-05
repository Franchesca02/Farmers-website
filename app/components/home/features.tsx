import React from "react";
import CardItems from "./cardItems/cardItems";
import Image from "next/image";
import Farm2 from "../../../public/assets/tractor.jpg";
import Farm4 from "../../../public/assets/Farm 5.webp";
import { FaShoppingBasket } from "react-icons/fa";
import { GiJug } from "react-icons/gi";
import styles from "./features.module.css";

const features = () => {
  return (
    <div className="relative">
      <CardItems />
      <div className="flex justify-between px-5 py-20 relative">
        <div className="w-[50%] h-svh">
          <Image
            src={Farm2}
            alt="faming tool"
            className="w-full h-svh object-cover rounded-full"
          />

          <Image
            src={Farm4}
            alt="faming tool"
            className="w-[15%] h-[25%] object-cover rounded-full absolute bottom-20 z-10"
          />
        </div>
        <div className="w-[50%] px-6 mt-4">
          <p className="text-[#EEC044] font-medium text-base">
            Our Introductions
          </p>
          <h1 className="text-5xl font-bold py-2 text-[#1F1E17]">
            Agriculture & Organic Product Farm
          </h1>
          <h3 className="text-[#4BAF47] text-xl font-semibold py-8">
            Frachescas' is the largest global organic farm
          </h3>
          <p className="text-sm text-[#878680] w-[450px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ut
            tempora. Alias quo sapiente facere mollitia. Iusto maiores beatae
            doloremque ullam suscipit sequi blanditiis esse porro id, aperiam
            exercitationem sunt!
          </p>
          <div className="flex justify-between pt-6">
            <div className="flex">
              <FaShoppingBasket size={70} color="#EEC044" className="mt-0" />
              <h4 className="text-lg font-semibold text-[#1F1E17] pt-1 px-2">
                Growing fruits <br /> and vegetables
              </h4>
            </div>

            <div className="flex">
              <GiJug size={70} color="#EEC044" className="mt-0" />
              <h4 className="text-lg font-semibold text-[#1F1E17] pt-1 px-2">
                Tips for ripening <br /> your fruits
              </h4>
            </div>
          </div>

          <section className="pt-8 block">
            <div className="flex">
              <input type="radio" className={styles.radio} />
              <span className="text-base text-[#1F1E17] px-2">
                Lorem ipsum is not simply a randon text
              </span>
            </div>
            <div className="flex pt-2">
              <input type="radio" className={styles.radio} />
              <span className="text-base text-[#1F1E17] px-2">
                Lorem ipsum is not simply a randon text
              </span>
            </div>
          </section>

          <div className="mt-10">
            <button className="w-40 py-4 rounded-md text-white text-sm border-none bg-[#4BAF47] text-center">
              Discover more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
