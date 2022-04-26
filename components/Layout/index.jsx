import React from 'react'

const Layout = ({ children }) => {
  return (
      <main className={'w-full min-h-screen flex justify-center items-center pt-12'}>
        {children}
      </main>
  )
}

export default Layout
