import * as React from "react"
import { Helmet } from "react-helmet";

const Head = ({ siteTitle }) => {
  return (
    <Helmet htmlAttributes={{
      lang: "en-US",
    }}>
      <title>{siteTitle}</title>
      {/* <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:title" name="title" content={title} />
      <meta
        property="og:description"
        name="description"
        content={description}
      />
      <meta property="og:image" name="image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} /> */}
    </Helmet>
    
  )
}

export default Head;