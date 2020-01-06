import { graphql } from 'gatsby';

export const fragmentDesktop = graphql`
  fragment fragmentDesktop on File {
    childImageSharp {
      fluid(maxWidth: 1100, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const fragmentMobile = graphql`
  fragment fragmentMobile on File {
    childImageSharp {
      fluid(maxWidth: 764, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
