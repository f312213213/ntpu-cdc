import React from 'react'
import Head from 'next/head'

const Meta = ({ title = 'NTPU CDC', description = '顯示最近的數據' }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name={'og:title'} content={title} key={title}/>
        <meta name={'description'} content={description}/>
      </Head>
  )
}

export default Meta
