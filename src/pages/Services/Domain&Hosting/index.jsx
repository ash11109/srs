import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const DomainHosting = () => {
  const pageTitle = "Domain & Hosting";
  const pageSubTitle = "Secure, Fast & Scalable Web Solutions";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/Domain&Hosting", label: "Domain & Hosting" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default DomainHosting