import React from 'react'
import Header from './Header'
import DataFetcher from './DataFetcher'
import Footer from './Footer'

function App() {
  return (
    <div>
      <div className="container px-0 shadow">
        <Header/>
        <DataFetcher/>
      </div>
      <Footer />
    </div>
  )
}

export default App
