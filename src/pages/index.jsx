import React from 'react'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'

import style from './index.style'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="min-h-screen dark:bg-gray-500">
        <header className="flex">
          <div className="flex-1 p-8 text-2xl text-black dark:text-white tracking-widest">
            Thibault
            <br />
            FRIEDRICH
          </div>
          <div className="flex-none p-8">Foo</div>
        </header>
      </div>
    </Layout>
  )
}

export default IndexPage
