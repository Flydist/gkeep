import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SearchInput } from 'components/molecules'
import logoImg from 'assets/images/logo.png'
import { BurgerButton, Title, Container } from './Header.style'

export const Header = ({
  handleSidebarOpen,
  takeSearchValue,
  takePickedColor
}) => {
  return (
    <Container>
      <BurgerButton onClick={handleSidebarOpen}>
        <AiOutlineMenu size={24} />
      </BurgerButton>
      <img src={logoImg} alt='logo' />
      <Link to='/notes'>
        <Title>Менеджер заметок</Title>
      </Link>
      <SearchInput
        takeSearchValue={takeSearchValue}
        takePickedColor={takePickedColor}
      />
    </Container>
  )
}

Header.propTypes = {
  handleSidebarOpen: PropTypes.func,
  takeSearchValue: PropTypes.func,
  takePickedColor: PropTypes.func
}
