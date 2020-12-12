import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDescription, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* LinkedIn cards */}
      <meta property='og:title' content={siteTitle} />
      <meta property='og:image' content={`${siteUrl}${image}`} />
      <meta property='og:description' content={siteDescription} />
      <meta property='og:url' content='https://www.darrenmatis.com' />
    </Helmet>
  );
}

export default SEO
