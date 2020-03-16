
import { css, cx } from 'emotion'
import styled from '@emotion/styled'

const MainDiv = styled.div`
border: 1px black solid;
`;

export default ({ children, title}) => {
    return (
        <html>
          <head>
            <title>{title}</title>
          </head>
    
          <body><MainDiv>{children}</MainDiv></body>
        </html>
      )
  }


  