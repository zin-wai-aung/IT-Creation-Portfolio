import React from "react";
import Button from "../reusable/Button";
import Logo from "../reusable/Logo";
import BrandMessage from "../hero/Brand.png";

const HeroSection = () => {
  return (
    <main className=" container mx-auto h-[80vh] relative w-full pt-40">
      <div className=" w-full flex justify-center items-center gap-52 ">
        <div className=" flex flex-col justify-start gap-14 w-1/2">
          <h1 className=" text-4xl text-white">
            Empowering Your Brand with{" "}
            <span className=" text-secondary">Technology</span> and{" "}
            <span className=" text-secondary">Creativity</span>
          </h1>
          <p className=" text-paragraphText">
            We specialize in providing cutting-edge branding, logo design, and
            graphic design services. Our team of experts is dedicated to helping
            businesses like yours stand out in the digital landscape. Contact us
            today to discuss your project and let's create something remarkable
            together.
          </p>
          <div className="">
            <Button title={"Get Started"} />
          </div>
        </div>
        <div className="">
          <div className=" w-[26rem] h-[26rem]">
          </div>
        </div>
        <img src={BrandMessage} className=" absolute left-[36rem] w-[48rem] top-20 z-10" alt="Branding Image" />
      </div>
    </main>
  );
};

export default HeroSection;
