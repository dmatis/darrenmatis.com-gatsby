import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const contact = ({data}) => {
  const { siteTitle } = data.site.siteMetadata;

  return (
    <>
      <Helmet htmlAttributes={{lang: "en" }} title={`Contact | ${siteTitle}`}>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <Layout>
        <section className="contact-page">
          <article className="contact-form">
            <h3>Get in touch</h3>
            <form action="https://formspree.io/f/mpzoyape" method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="name" className="form-control" required />
                <input type="email" name="email" placeholder="email" className="form-control" required />
                <textarea name="message" id="" rows="10" placeholder="message" className="form-control" required></textarea>
                <div className="g-recaptcha" data-sitekey="6Lfh6BUaAAAAAEe8d43cfrF5IoDHYqsZelUdpphp"></div>
              </div>
              <button type="submit" className="submit-btn btn">Submit</button>
            </form>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default contact
