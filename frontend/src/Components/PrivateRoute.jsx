import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
  console.log('privete route works!!!')
  return (
    <Route  
    {...rest}
    >
      {children}
    </Route>
  )
}


export default PrivateRoute

