import PageHeading from '../../components/PageHeading';
import Breadcrumb from '../../components/Breadcrumb';

const About = () => {
  const pageTitle = "About Us";
  const pageSubTitle = "Sysroot Solution Pvt Ltd.";

  const breadcrumbRoutes = [
    { path: "/about", label: "About Us" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default About