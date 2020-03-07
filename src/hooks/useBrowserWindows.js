import {useContext} from 'react'
import {BrowserWindowContext} from '../context'

const useBrowserWindows = () => {
  const {activeUrl, setActiveUrl, openWindows, setOpenWindows} = useContext(
    BrowserWindowContext,
  )

  return {activeUrl, setActiveUrl, openWindows, setOpenWindows}
}

export default useBrowserWindows
