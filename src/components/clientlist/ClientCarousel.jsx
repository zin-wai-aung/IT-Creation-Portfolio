import React from 'react'
import { ReactScrolling } from "react-auto-glide";
import "react-auto-glide/dist/index.css";
import PageTitle from '../reusable/PageTitle';
import { NayChi, Rainbow, ATheeZay, NayNattTharr } from "./img";

const imgs = [NayChi, Rainbow, ATheeZay, NayNattTharr];

const mapper = (source) => <img src={source} alt="helloinmg" />;

const ClientCarousel = () => {
    return (
      <main className=' mt-40 container mx-auto'>
        <PageTitle title={"Clients"} subTitle={"Our Featured Clients"} />

        <section className="hero mt-20">
          <div className="glide-container w-full h-96 gap-x-20">
            <ReactScrolling
            
              mapper={mapper}
              list={imgs}
              time="30s"
              width="200px"
              delayBetweenScroll="1000"
            />
          </div>
        </section>
      </main>
    );
}

export default ClientCarousel