import PageHeading from '../../../components/PageHeading';
import Breadcrumb from '../../../components/Breadcrumb';

const Blog = () => {
  const pageTitle = "Blogs";
  const pageSubTitle = "Tech Insights for a Smarter Tomorrow";

  const breadcrumbRoutes = [
    { path: "/more/Blog", label: "Blogs" }
  ];

  return (
    <div>
      <PageHeading pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
      <Breadcrumb routes={breadcrumbRoutes} />
    </div>
  )
}

export default Blog