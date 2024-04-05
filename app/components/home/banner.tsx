import React from "react";
import styles from "./banner.module.css";
import Features from "./features";
import Service from "./service";

const banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className="text-white absolute z-20">
          <h2 className="text-lg py-0">Welcome to Franchesca's Farming!</h2>
          <h1 className="text-5xl font-bold py-2">Agriculture & Eco Farming</h1>
          <p className="w-80 text-xs py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            doloribus, repudiandae animi dolore adipisci dolorum veniam esse
            rerum quis perspiciatis sequi eius corporis reprehenderit! Aliquam
            quis aspernatur molestias quasi non.
          </p>
          <button className="rounded-xl bg-green-500 text-sm border-none w-32 py-3 my-4">
            Dicover more...
          </button>
        </div>
      </div>
      <Features />
      <Service />
    </>
  );
};

export default banner;
