import React, {createContext, useState} from 'react'

const BrowserWindowContext = createContext({})

const BrowserWindowContextProvider = ({children}) => {
  const [openWindows, setOpenWindows] = useState([
    {
      width: 200,
      height: 300,
    },
    {
      width: 600,
      height: 300,
    },
  ])
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
