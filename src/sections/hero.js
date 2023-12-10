import * as React from "react";
import * as styles from "./hero.module.css";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
// import Button from "../components/button";
// import MarkdownText from "../components/markdown-text";
import Heading from "../components/heading";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


export default function Hero({ heading, secondaryHeading, content }) {
  const data = useStaticQuery(graphql`
  query {
    myImage: file(relativePath: { eq: "keyboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <Section>
      <div className={styles.root}>
        <div className={styles.content}>
          <Heading as="h2" className={styles.secondaryHeading}>
            {"Developing Software with Precision, Innovation"}
          </Heading>
          <Heading as="h1" className={styles.heading}>
            {"Welcome to Gong Jiang Lab"}
          </Heading>
          <div>
            {'At Gong Jiang Lab, we embody the essence of royal artisan, 宫匠 (gōng jiàng), by developing top-notch sofware that surpasses expectations.\n'}
          </div>
        </div>
        <div className={styles.image}>
          <Img fluid={data.myImage.childImageSharp.fluid} alt="My Image" />
        </div>
      </div>
    </Section>
  );
}
