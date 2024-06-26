import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../feed/Feed'
import Head from '../interface-elements/Head'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStatus from './UserStatus'

const User = () => {
  const {data} = React.useContext(UserContext);


  return (
    <section className='container'>
      <Head title='Minha conta'/>
      <UserHeader />
      <Routes>
          <Route path="/" element={<Feed user={data.id}/>}/>
          <Route path='postar' element={<UserPhotoPost />}/>
          <Route path='estatisticas' element={<UserStatus />}/>
      </Routes>
    </section>
  )
}

export default User