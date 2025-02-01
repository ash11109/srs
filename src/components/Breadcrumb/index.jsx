import { NavLink } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import './index.css';

const Breadcrumb = ({ routes }) => {
  return (
    <div className="bg-blue-50">
      <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
        <NavLink to="/" className="text-srs-primary">
          <FaHome size={16} />
        </NavLink>
        {routes.map((route, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-5 text-srs-primary rtl:-scale-x-100">
              <FaChevronRight size={12} />
            </span>
            <NavLink to={route.path} className="text-srs-primary hover:underline">
              {route.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
