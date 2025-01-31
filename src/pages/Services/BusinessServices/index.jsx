import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const BusinessServices = () => {
  const pageTitle = "Business Services";
  const pageSubTitle = "Comprehensive Services for Business Growth";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/BusinessServices", label: "Business Services" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default BusinessServices