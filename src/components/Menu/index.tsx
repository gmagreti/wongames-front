import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from 'components/Logo'
import * as Styled from './styles'

const Menu = () => (
  <Styled.Wrapper>
    <Styled.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </Styled.IconWrapper>
    <Styled.LogoWrapper>
      <Logo hideOnMobile />
    </Styled.LogoWrapper>
    <Styled.MenuGroup>
      <Styled.IconWrapper>
        <SearchIcon aria-label="Search" />
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </Styled.IconWrapper>
    </Styled.MenuGroup>
  </Styled.Wrapper>
)

export default Menu
