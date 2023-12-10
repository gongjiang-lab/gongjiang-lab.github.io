import * as React from "react"
import * as styles from "./header.module.css";
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    myImage: file(relativePath: { eq: "gong_jiang.png" }) {
      childImageSharp {
        fixed(width: 200, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  return (
    <header className={styles.header}>
      <Img fixed={data.myImage.childImageSharp.fixed} alt="Gong Jiang Lab" />
    </header>
  );
}

export default Header
