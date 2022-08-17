import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <Styled.Wrapper size={size}>
    {!!children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
