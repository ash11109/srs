import jspc from '../../assets/images/clients/jspc.png';
import chamaktaHindustan from '../../assets/images/clients/chamaktahindustanlogo-1024x1024.png';
import foodCourt from '../../assets/images/clients/foodcourt.png';
import aamdani from '../../assets/images/clients/chota-logo-aamdani-1024x449.png';
import mixed from '../../assets/images/clients/logo-h-s-min.png';
import saps from '../../assets/images/clients/SAPSLOGO-1024x541.png';
import gpi from '../../assets/images/clients/GPILOGO-1024x295.png';
import urban from '../../assets/images/clients/urbandslogo-6-1024x258.png';
import mixed2 from '../../assets/images/clients/logo2-39xi92rprx1pflyzgei3gq.png';
import mixed3 from '../../assets/images/clients/logo.png';
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
    <div className="py-5 shadow-sm">
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
          <div className="ml-10 logos-slider-container">
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