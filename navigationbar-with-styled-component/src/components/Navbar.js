import React from 'react';
import * as S from './NavbarStyle';
import logomn from '../asset/blender_logo_no_socket_white.png';
import { useState } from 'react';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <div>
      <S.NavbarContainer extendNavbar={extendNavbar}>
        <S.NavbarInnerContainer>
          <S.LeftContainer>
            <S.NavbarLinkContainer>
              <S.NavbarLink to='/'>Home</S.NavbarLink>
              <S.NavbarLink to='/product'>Products</S.NavbarLink>
              <S.NavbarLink to=''>Contact Us</S.NavbarLink>
              <S.NavbarLink to=''>About us </S.NavbarLink>
              <S.OpenLinkButton
                onClick={() => setExtendNavbar((curr) => !curr)}>
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </S.OpenLinkButton>
            </S.NavbarLinkContainer>
          </S.LeftContainer>
          <S.RightContainer>
            <S.Logo src={logomn}></S.Logo>
          </S.RightContainer>
        </S.NavbarInnerContainer>
        {extendNavbar && (
          <S.NavbarExtendedContainer>
            <S.NavbarLinkExtended to='/'>Home</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to='/product'>Products</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to=''>Contact Us</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to=''>About us </S.NavbarLinkExtended>
          </S.NavbarExtendedContainer>
        )}
      </S.NavbarContainer>
    </div>
  );
}

export default Navbar;
