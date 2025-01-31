import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';


const DigitalMarketing = () => {
  const pageTitle = "Digital Marketing";
  const pageSubTitle = "SEO, Social Media & Ads – We Do It All!";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/DigitalMarketing", label: "Digital Marketing" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default DigitalMarketing