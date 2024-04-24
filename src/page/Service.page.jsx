import React from 'react'
import ServiceCard from '../components/service/ServiceCard';
import ServiceCardTest from '../components/service/ServiceCardTest';
import PageTitle from '../components/reusable/PageTitle';

const Service = () => {
  return (
    <main id="service" className=" container mx-auto mt-32">
      <PageTitle title={"Services"} subTitle={"Solutions We Provided"} />

      <div className=" mt-10">
        <ServiceCard />
      </div>
    </main>
  );
}

export default Service