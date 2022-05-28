import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

// Por padrao o compontende deve renderizar na cor branca
// Renderizar o componente `render`
// Selecionar o elemento a ser testado `screen` (queries) = getByLabel ...
// Expect - assertion - assercao - comparacao - analise (espero que renderize a logo na cor branca)

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black labelwhen is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
