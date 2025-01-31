import PageHeading from '../../components/PageHeading';
import Breadcrumb from '../../components/Breadcrumb';

const Products = () => {
  const pageTitle = "Products";
  const pageSubTitle = "Smart Software for Smarter Businesses";

  const breadcrumbRoutes = [
    { path: "/products", label: "Products" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Products