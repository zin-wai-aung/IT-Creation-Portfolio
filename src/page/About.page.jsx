import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import CountryMap from "../components/reusable/CountryMap"
const About = () => {
    return (
        <>
        <main id="about" className=" container mx-auto mt-32">
          <div className=" w-full flex justify-center items-center gap-40 ">
            <div className="">
                        <div className=" w-[30rem] h-[30rem]">
                            <CountryMap/>
              </div>
            </div>
            <div className=" flex flex-col justify-start gap-4 w-1/2">
              <p className=" text-secondary text-2xl uppercase font-bold">
                Who We Are
              </p>
              <h1 className=" text-4xl text-white">
                We are Leading to Better Creativity and Quality
              </h1>
              <p className=" text-paragraphText mt-8">
                At IT Creation, we are more than just a company - we're a team
                of passionate individuals dedicated to pushing the boundaries of
                creativity and technology. Since our inception, we have been
                committed to providing innovative solutions that empower
                businesses to thrive in the digital age.
              </p>
              <p>
                {" "}
                At the core of our mission is the desire to help businesses
                succeed by leveraging the power of technology and design. We
                believe in the transformative impact of a well-crafted brand
                identity and cutting-edge digital solutions.
              </p>
            </div>
          </div>
        </main>
      </>
    );
};

export default About;
