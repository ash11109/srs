import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const CCTVInstallation = () => {
  const pageTitle = "CCTV Installation";
  const pageSubTitle = "Keeping Your Premises Safe & Secure";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/CCTVInstallation", label: "CCTV Installation" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default CCTVInstallation