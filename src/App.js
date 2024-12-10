import './App.css';
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
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='flex flex-col justify-between min-h-screen relative'>
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
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;


