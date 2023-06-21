import React from 'react';
import logoStar from '../../assets/logoStar.png'
import { Burger } from './Burger';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <S.NavbarContainer>
      <Link to="/">
        <img src={logoStar} alt="" />
      </Link>

      <Burger />
    </S.NavbarContainer>
  );
};
