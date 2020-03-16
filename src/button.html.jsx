import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const ButtonComponent = ({ msg='i am a button'}) =>  (
    <Button onClick={()=> console.log('you did it!')}>{msg}</Button>
)

export  default ButtonComponent