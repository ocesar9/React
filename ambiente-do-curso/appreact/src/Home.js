import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div>
      {/* <Head title='Home' description="Essa e a descricao da Home"/> */}
      <Helmet>
        <title>Dogs | Home</title>
      </Helmet>
      <h1>Home</h1>
      <p>Essa e a home</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home