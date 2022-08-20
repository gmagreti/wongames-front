import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <Styled.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
