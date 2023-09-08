import React, { createContext, useState } from 'react'


export const TogglerContext= createContext();

const TogglerProvider = ({children}) => {
   const [toggle,setToggle]= useState(true);
   const [sidebar,setSidebar]= useState(false);
  return (
    <TogglerContext.Provider value={{toggle,setToggle,sidebar,setSidebar}} >
        {children}
    </TogglerContext.Provider>
  )
}

export default TogglerProvider