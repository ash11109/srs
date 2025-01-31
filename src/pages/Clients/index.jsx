import PageHeading from '../../components/PageHeading';
import Breadcrumb from '../../components/Breadcrumb';

const Clients = () => {
  const pageTitle = "Clients";
  const pageSubTitle = "Brands That Believe in Us";

  const breadcrumbRoutes = [
    { path: "/clients", label: "Clients" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Clients