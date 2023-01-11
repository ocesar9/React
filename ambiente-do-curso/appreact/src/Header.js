import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('mudou a rota!')
  },[location])

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      {' '}|{' '}
      <NavLink to="sobre">Sobre</NavLink>
      {' '}|{' '}
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default Header;
