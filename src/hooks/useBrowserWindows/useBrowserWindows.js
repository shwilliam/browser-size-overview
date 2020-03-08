import {useContext} from 'react'
import {BrowserWindowContext} from '../../context'
import DEVICES from './devices'

const useBrowserWindows = () => {
  const {activeUrl, setActiveUrl, openWindows, setOpenWindows} = useContext(
    BrowserWindowContext,
  )

  return {activeUrl, setActiveUrl, openWindows, setOpenWindows, DEVICES}
}

export default useBrowserWindows
