import React, { createContext, useState } from 'react'


export const TogglerContext= createContext();

const TogglerProvider = ({children}) => {
   const [toggle,setToggle]= useState(true);
  return (
    <TogglerContext.Provider value={{toggle,setToggle}} >
        {children}
    </TogglerContext.Provider>
  )
}

export default TogglerProvider