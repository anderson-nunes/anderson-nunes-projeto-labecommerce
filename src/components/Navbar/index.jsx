import React from 'react';
import logoStar from '../../assets/logoStar.png'
import { Burger } from './Burger';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const Navbar = ({ handleName, name, setName }) => {

  return (
    <S.NavbarContainer>
      <Link to="/">
        <img src={logoStar} alt="" />
      </Link>

      <Burger
        handleName={handleName}
        name={name}
        setName={setName}
      />
    </S.NavbarContainer>
  );
};
