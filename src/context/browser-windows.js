import React, {createContext, useState} from 'react'

export const BrowserWindowContext = createContext({})

export const BrowserWindowContextProvider = ({children}) => {
  const [openWindows, setOpenWindows] = useState()
  const [activeUrl, setActiveUrl] = useState()

  return (
    <BrowserWindowContext.Provider
      value={{activeUrl, setActiveUrl, openWindows, setOpenWindows}}
    >
      {children}
    </BrowserWindowContext.Provider>
  )
}
