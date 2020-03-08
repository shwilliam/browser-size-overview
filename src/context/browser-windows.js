import React, {createContext, useState} from 'react'

const BrowserWindowContext = createContext({})

const BrowserWindowContextProvider = ({children}) => {
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

export default BrowserWindowContext
export {BrowserWindowContextProvider}
