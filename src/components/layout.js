import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Head from "./head"
import * as styles from "./layout.module.css";
import * as cssVars from "../styles/variables.module.css";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head siteTitle={data.site.siteMetadata?.title} />
      <Header/>
      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}>
        <a href="https://gatsbyjs.com">Built with Gatsby</a>
        <a href="https://github.com/gatsbyjs/gatsby-starter-landing-page">
          View Source on GitHub
        </a>
        <Link to="/demo">Demo</Link>
      </footer> */}
    </div>
  )
}

export default Layout
