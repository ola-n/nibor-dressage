/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { siteUrl } from '../config/siteConfig';
import niborPreview from '../images/common/colored-log.png';

type Props = {
  description?: string,
  lang?: string,
  meta?: Array<Object>,
  title: string,
};

function SEO({ description, lang = `en`, meta = [], title = `` }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLang
            siteLocale
            siteName
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: site.siteMetadata.siteLocale,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${niborPreview}`,
        },
        {
          property: `og:image:width`,
          content: '1200',
        },
        {
          property: `og:image:height`,
          content: '630',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
