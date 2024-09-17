import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query UseSiteMetadata {
    site {
      siteMetadata {
        siteUrl
        foo
      }
    }
  }
`;

const useSiteMetadata = () => {
  const data: Queries.UseSiteMetadataQuery = useStaticQuery(query);
  const meta = data.site?.siteMetadata;

  return {
    siteUrl: meta?.siteUrl || "",
  };
};

export default useSiteMetadata;
