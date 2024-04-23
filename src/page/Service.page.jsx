import React from 'react'
import ServiceCard from '../components/service/ServiceCard';
import ServiceCardTest from '../components/service/ServiceCardTest';

const Service = () => {
  return (
    <main id='service' className=' container mx-auto mt-20'>
      <div className=" flex flex-col justify-start gap-4 w-1/2">
        <p className=" text-secondary text-2xl uppercase font-bold">
          Services
        </p>
        <h1 className=" text-4xl text-white">Solution We Provided </h1>
      </div>

      <div className=" mt-10">

      <ServiceCard />
      </div>
    </main>
  );
}

export default Service