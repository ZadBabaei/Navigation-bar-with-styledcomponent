import React from 'react';
import * as S from './NavbarStyle';
 import logomn from "../asset/blender_logo_no_socket_white.png"



function Navbar() {
	return (
		<div>
			<S.NavbarContainer>
				<S.NavbarInnerContainer>
					<S.LeftContainer>
						<S.NavbarLinkContainer>
							<S.NavbarLink to='/'>
								Home
							</S.NavbarLink>
							<S.NavbarLink to='/product'>
								Products
							</S.NavbarLink>
							<S.NavbarLink to=''>
								Contact Us
							</S.NavbarLink>
							<S.NavbarLink to=''>
								About us{' '}
							</S.NavbarLink>
						</S.NavbarLinkContainer>
					</S.LeftContainer>
					<S.RightContainer>
						<S.Logo src={logomn}></S.Logo>
					</S.RightContainer>
				</S.NavbarInnerContainer>
			</S.NavbarContainer>
		</div>
	);
}

export default Navbar;
