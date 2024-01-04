import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavbarContainerStyled,
  LogoStyled,
  LinksContainerStyled,
  LinkContainerStyled,
} from './NavbarStyles'

export const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <LinksContainerStyled>
          <Link to='/'>
            <LinkContainerStyled>
              Inicio
            </LinkContainerStyled>
          </Link>
          <Link to='/'>
            <LinkContainerStyled>
              Ayuda
            </LinkContainerStyled>
          </Link>
          <Link to='/'>
            <LogoStyled
              src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white_brnuuq.png" 
              alt="Logo Genova"
            />
          </Link>
          <Link to='/'>
            <LinkContainerStyled>
              Mujer
            </LinkContainerStyled>
          </Link>
          <Link to='/'>
            <LinkContainerStyled>
              Hombre
            </LinkContainerStyled>
          </Link>
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}
