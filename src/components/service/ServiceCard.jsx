import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import serviceOnePhoto from "./img/service1.jpg";
import Button from "../reusable/Button";
import "./service.css"

const ServiceCardTest = () => {
  return (
    <div className=" grid grid-cols-3">
      <Card className="mt-10 w-96 rounded-t-lg">
        <CardHeader
          shadow={false}
          floated={false}
          color="blue-gray"
          className="m-0 rounded-t-lg rounded-b-none h-96 w-full group flex justify-center items-center  mx-auto service-photo service-background1"
        >
          {/* <img className=" h-full w-full" src={serviceOnePhoto} alt="card-image" /> */}
          <div>
            <div className="w-full image-cover rounded-t-md"></div>
          </div>
          <div className=" opacity-0 group-hover:opacity-100 text-center transition-all duration-300 px-5 mt-10">
            <span className=" text-white font-alacrity shadow">
                Logos are symbols or designs used by organizations, businesses,
                or individuals to represent their identity and convey a message
                to the audience.
            </span>
            <div className=" flex justify-center items-center mt-20">
              <Button title={"Read More"} />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" bg-primaryLight rounded-b-lg">
          <Typography variant="h5" className="mb-2 text-white text-center">
            Logo Branding{" "}
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-10 w-96 rounded-t-lg">
        <CardHeader
          shadow={false}
          floated={false}
          color="blue-gray"
          className="m-0 rounded-t-lg rounded-b-none h-96 w-full group flex justify-center items-center  mx-auto service-photo service-background2"
        >
          {/* <img className=" h-full w-full" src={serviceOnePhoto} alt="card-image" /> */}
          <div>
            <div className="w-full image-cover rounded-t-md"></div>
          </div>
          <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300 text-center px-5 mt-10">
            <span className=" text-white font-alacrity text-center shadow">
              Social media marketing design encompasses the visual elements and
              strategies used to promote brands, products, or services on social
              media platforms.
            </span>
            <div className=" flex justify-center items-center mt-20">
              <Button title={"Read More"} />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" bg-primaryLight rounded-b-lg">
          <Typography variant="h5" className="mb-2 text-white text-center">
            Social Media Design{" "}
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-10 w-96 rounded-t-lg">
        <CardHeader
          shadow={false}
          floated={false}
          color="blue-gray"
          className="m-0 rounded-t-lg rounded-b-none h-96 w-full group flex justify-center items-center  mx-auto service-photo service-background3"
        >
          {/* <img className=" h-full w-full" src={serviceOnePhoto} alt="card-image" /> */}
          <div>
            <div className="w-full image-cover rounded-t-md"></div>
          </div>
          <div className=" opacity-0 group-hover:opacity-100 transition-all text-center duration-300 px-5 mt-10">
            <span className=" text-white font-alacrity text-center shadow">
              Packaging design is often the first point of contact between a
              product and the consumer. It serves as a visual representation of
              the brand and influences the initial perception of the product.
            </span>
            <div className=" flex justify-center items-center mt-20">
              <Button title={"Read More"} />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" bg-primaryLight rounded-b-lg">
          <Typography variant="h5" className="mb-2 text-white text-center">
            Packaging Design{" "}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServiceCardTest;
