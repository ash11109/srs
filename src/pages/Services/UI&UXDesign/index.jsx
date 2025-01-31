import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const UIUXDesign = () => {
  const pageTitle = "UI & UX Design";
  const pageSubTitle = "Designing User-Centric Digital Experiences";

  const breadcrumbRoutes = [
    { path: "#", label: "Services" },
    { path: "/services/UI&UXDesign", label: "UI & UX Design" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default UIUXDesign