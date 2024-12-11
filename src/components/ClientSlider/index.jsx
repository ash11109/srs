import React from 'react'
import jspc from '../../assets/Images/clients/jspc.png';
import chamaktaHindustan from '../../assets/Images/clients/chamaktahindustanlogo-1024x1024.png';
import foodCourt from '../../assets/Images/clients/foodcourt.png';
import aamdani from '../../assets/Images/clients/chota-logo-aamdani-1024x449.png';
import mixed from '../../assets/Images/clients/logo-h-s-min.png';
import saps from '../../assets/Images/clients/SAPSLOGO-1024x541.png';
import gpi from '../../assets/Images/clients/GPILOGO-1024x295.png';
import urban from '../../assets/Images/clients/urbandslogo-6-1024x258.png';
import mixed2 from '../../assets/Images/clients/logo2-39xi92rprx1pflyzgei3gq.png';
import mixed3 from '../../assets/Images/clients/logo.png';

import '../ClientSlider/index.css';

const clients = [
  {
    name: "JSPC",
    path: jspc,
  },
  {
    name: "Chamakta Hindustan",
    path: chamaktaHindustan,
  },
  {
    name: "Food Court",
    path: foodCourt,
  },
  {
    name: "Aamdani",
    path: aamdani,
  },
  {
    name: "Client",
    path: mixed,
  },
  {
    name: "saps",
    path: saps,
  },
  {
    name: "Client",
    path: mixed2,
  },
  {
    name: "GPI",
    path: gpi,
  },
  {
    name: "Urban",
    path: urban,
  },
  {
    name: "Client",
    path: mixed3
  }
];

const ClientSlider = () => {
  return (
    <div className="my-3">
      <div>
        <h1 className='text-3xl'>Clients Who Trust Us</h1>
        <h2 className='text-xl'>Trusted by the Best, to Deliver the Best</h2>
      </div>
      <div className="cardClient">
        <div className="logos-slider">
          <div className="logos-slider-container">
            {clients.map((client, i) => (
              <img
                key={`duplicate-${i}`}
                src={client.path}
                className="marquee-img"
                alt={`${client.name} duplicate`}
              />
            ))}
          </div>
          <div class="ml-10 logos-slider-container">
            {clients.map((client, i) => (
              <img
                key={`duplicate-${i}`}
                src={client.path}
                className="marquee-img"
                alt={`${client.name} duplicate`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider
