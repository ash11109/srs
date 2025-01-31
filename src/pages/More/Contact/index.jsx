import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const Contact = () => {
  const pageTitle = "Contact Us";
  const pageSubTitle = "Get in Touch with Us";

  const breadcrumbRoutes = [
    { path: "/more/Contact", label: "Contact" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Contact