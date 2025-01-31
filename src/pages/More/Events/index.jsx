import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const Events = () => {
  const pageTitle = "Events";
  const pageSubTitle = "Stay Updated with Our Latest Events";

  const breadcrumbRoutes = [
    { path: "/more/Events", label: "Events" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Events