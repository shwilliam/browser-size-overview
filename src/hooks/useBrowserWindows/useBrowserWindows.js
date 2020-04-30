import {useContext} from 'react'
import {BrowserWindowContext} from '../../context'
import {DEVICES} from './devices'

export const useBrowserWindows = () => {
  const {activeUrl, setActiveUrl, openWindows, setOpenWindows} = useContext(
    BrowserWindowContext,
  )

  return {
    activeUrl,
    setActiveUrl,
    openWindows,
    setOpenWindows,
    DEVICES,
  }
}
