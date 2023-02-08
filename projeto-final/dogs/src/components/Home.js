import React from 'react'
import Feed from './feed/Feed'
import Head from './interface-elements/Head'
import Loading from './interface-elements/Loading'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description='Home do Site Dogs, com o feed de fotos.'/>
      <Feed />
    </section>
  )
}

export default Home