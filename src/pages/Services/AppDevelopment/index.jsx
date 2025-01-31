import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const AppDevelopment = () => {
  const pageTitle = "App Development";
  const pageSubTitle = "Transforming Ideas into Powerful Apps";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/AppDevelopment", label: "App Development" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default AppDevelopment