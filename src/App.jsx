import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import WebDevelopment from './pages/Services/WebDevelopment';
import AppDevelopment from './pages/Services/AppDevelopment';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment';
import UIUXDesign from './pages/Services/UI&UXDesign';
import CCTVInstallation from './pages/Services/CCTVInstallation';
import BusinessServices from './pages/Services/BusinessServices';
import DomainHosting from './pages/Services/Domain&Hosting';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Blog from './pages/More/Blog';
import Contact from './pages/More/Contact';
import Events from './pages/More/Events';
import HelpCenter from './pages/More/HelpCenter';
import Security from './pages/More/Security';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/services/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/services/SoftwareDevelopment" element={<SoftwareDevelopment />} />
          <Route path="/services/UI&UXDesign" element={<UIUXDesign />} />
          <Route path="/services/CCTVInstallation" element={<CCTVInstallation />} />
          <Route path="/services/BusinessServices" element={<BusinessServices />} />
          <Route path="/services/Domain&Hosting" element={<DomainHosting />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="more/Blog" element={<Blog />} />
          <Route path="more/Contact" element={<Contact />} />
          <Route path="more/Events" element={<Events />} />
          <Route path="more/HelpCenter" element={<HelpCenter />} />
          <Route path="more/Security" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;