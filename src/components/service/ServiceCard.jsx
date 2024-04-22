import React from 'react'
import "./service.css"

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full mt-10">
      <div className="p-4  w-[26rem] h-[26rem]">
        <div className="shadow-lg w-full h-full group rounded-lg flex justify-center items-center  mx-auto service-background">
          <div>
            <div className="w-full image-cover rounded-t-md"></div>
          </div>
          <div className=" opacity-0 fd-sh group-hover:opacity-100 transition-all duration-300 px-5">
            <p className="text-[18px] text-center text-paragraphText">
              Logos are symbols or designs used by organizations, businesses, or
              individuals to represent their identity and convey a message to
              the audience{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard