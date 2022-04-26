import React from 'react'

import '../styles/globals.css'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
      <>
        <Meta/>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
  )
}

export default MyApp
