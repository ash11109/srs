import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const HelpCenter = () => {
  const pageTitle = "Help Center";
  const pageSubTitle = "How Can We Assist You?";

  const breadcrumbRoutes = [
    { path: "/more/HelpCenter", label: "Help Center" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default HelpCenter