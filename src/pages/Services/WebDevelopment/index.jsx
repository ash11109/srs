import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const WebDevelopment = () => {
  const pageTitle = "Web Development";
  const pageSubTitle = "Innovative Web Development for Modern Businesses";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/WebDevelopment", label: "Web Development" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default WebDevelopment