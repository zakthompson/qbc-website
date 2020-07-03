import React from "react"
import Layout from "../components/layout"
import KidsHero from "../components/kidsHero"
import KidsContent from "../components/kidsContent"

const KidsPage = ({ location }) => {
  console.log(location)
  return (
    <Layout title="Kingdom Kids" pathName={location.pathname}>
      <KidsHero />
      <KidsContent />
    </Layout>
  )
}

export default KidsPage
