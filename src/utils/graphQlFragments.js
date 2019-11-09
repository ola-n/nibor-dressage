import { graphql } from 'gatsby';

export const heroFragmentDesktop = graphql`
  fragment heroFragmentDesktop on File {
    childImageSharp {
      fluid(maxWidth: 1100, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const heroFragmentMobile = graphql`
  fragment heroFragmentMobile on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
