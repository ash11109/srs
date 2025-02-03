import { Routes, Route } from 'react-router-dom';
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
import NoPage from './components/NoPage';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/web_development" element={<WebDevelopment />} />
      <Route path="/app_development" element={<AppDevelopment />} />
      <Route path="/digital_marketing" element={<DigitalMarketing />} />
      <Route path="/software_development" element={<SoftwareDevelopment />} />
      <Route path="/ui_ux_design" element={<UIUXDesign />} />
      <Route path="/cctv_installation" element={<CCTVInstallation />} />
      <Route path="/business_services" element={<BusinessServices />} />
      <Route path="/domain_hosting" element={<DomainHosting />} />
      <Route path="/products" element={<Products />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/help_center" element={<HelpCenter />} />
      <Route path="/security" element={<Security />} />
      <Route path="*" element={<NoPage />} /> */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="web_development" element={<WebDevelopment />} />
        <Route path="app_development" element={<AppDevelopment />} />
        <Route path="digital_marketing" element={<DigitalMarketing />} />
        <Route path="software_development" element={<SoftwareDevelopment />} />
        <Route path="ui_ux_design" element={<UIUXDesign />} />
        <Route path="cctv_installation" element={<CCTVInstallation />} />
        <Route path="business_services" element={<BusinessServices />} />
        <Route path="domain_hosting" element={<DomainHosting />} />
        <Route path="products" element={<Products />} />
        <Route path="clients" element={<Clients />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="events" element={<Events />} />
        <Route path="help_center" element={<HelpCenter />} />
        <Route path="security" element={<Security />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;