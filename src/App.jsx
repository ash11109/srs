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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/Services/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/Services/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Services/SoftwareDevelopment" element={<SoftwareDevelopment />} />
        <Route path="/Services/UI&UXDesign" element={<UIUXDesign />} />
        <Route path="/Services/CCTVInstallation" element={<CCTVInstallation />} />
        <Route path="/Services/BusinessServices" element={<BusinessServices />} />
        <Route path="/Services/Domain&Hosting" element={<DomainHosting />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="More/Blog" element={<Blog />} />
        <Route path="More/Contact" element={<Contact />} />
        <Route path="More/Events" element={<Events />} />
        <Route path="More/HelpCenter" element={<HelpCenter />} />
        <Route path="More/Security" element={<Security />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;