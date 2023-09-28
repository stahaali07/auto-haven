"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, and Rent a Car — Quickly and Easily!
        </h1>

        <p className="hero__subtitle">
          Streamline Your Car Rental Experience With Our Effortless Booking
          Process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
