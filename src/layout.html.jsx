export default ({ children, title}) => {
    return (
        <html>
          <head>
            <title>{title}</title>
          </head>
    
          <body>{children}</body>
        </html>
      )
  }