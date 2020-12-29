import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Play from "../components/play"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Play/>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
