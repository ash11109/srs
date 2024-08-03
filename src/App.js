import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Homepage';
import About from './components/About/Aboutpage';
import Portfolio from './components/Portfolio/Portfoliopage';
import Blog from './components/Blog/Blogpage';
import Contact from './components/Contact/Contactpage';

function App() {
  
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
