import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title,setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const {pathname} = location;
    const headerPathTitle = {
      '/conta':'Minha Conta',
      '/conta/postar':'Poste sua foto',
      '/conta/estatisticas': 'Estatisticas',
    }   
    
    setTitle(headerPathTitle[pathname]);
  },[location])


  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader