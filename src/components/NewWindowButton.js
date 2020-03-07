import React from 'react'
import {useBrowserWindows} from '../hooks'

const NewWindowButton = () => {
  const {activeUrl, setOpenWindows} = useBrowserWindows()

  const createNewWindow = () => {
    setOpenWindows(s => [...s, {width: 300, height: 300}])
  }

  if (!activeUrl) return null

  return <button onClick={createNewWindow}>Create new window</button>
}

export default NewWindowButton
