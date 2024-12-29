import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/about';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import UIUXDesign from './pages/services/UI&UXDesign';
import CCTVInstallation from './pages/services/CCTVInstallation';
import BusinessServices from './pages/services/BusinessServices';
import DomainHosting from './pages/services/Domain&Hosting';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Blog from './pages/more/Blog';
import Contact from './pages/more/Contact';
import Events from './pages/more/Events';
import HelpCenter from './pages/more/HelpCenter';
import Security from './pages/more/Security';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='flex flex-col justify-between min-h-screen'>
        <div>
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;