import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const Security = () => {
  const pageTitle = "Security";
  const pageSubTitle = "Safeguarding Your Data & Privacy";

  const breadcrumbRoutes = [
    { path: "/more/Security", label: "Security" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Security