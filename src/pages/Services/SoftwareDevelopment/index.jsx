import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const SoftwareDevelopment = () => {
  const pageTitle = "Software Development";
  const pageSubTitle = "Custom Software Solutions for Your Business Needs";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/SoftwareDevelopment", label: "Software Development" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default SoftwareDevelopment