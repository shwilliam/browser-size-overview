import React from 'react'
import {useBrowserWindows} from '../hooks'

const NewWindowButton = () => {
  const {activeUrl, setOpenWindows} = useBrowserWindows()

  const createNewWindow = () => {
    setOpenWindows(s => [...s, {width: 300, height: 300}])
    // TODO: scroll to right
  }

  if (!activeUrl) return null

  return (
    <button className="site__floating-action" onClick={createNewWindow}>
      <span className="sr-only">Create new window</span>
      <span aria-hidden>+</span>
    </button>
  )
}

export default NewWindowButton
