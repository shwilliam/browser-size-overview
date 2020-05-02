import React from 'react'
import {append} from 'ramda'
import {useBrowserWindows} from '../hooks'

export const NewWindowButton = () => {
  const {activeUrl, setOpenWindows} = useBrowserWindows()

  const createNewWindow = () => {
    setOpenWindows(append({width: 300, height: 300}))

    document.getElementById('frame__list').scrollTo(0, 0)
  }

  if (!activeUrl) return null

  return (
    <button className="site__floating-action" onClick={createNewWindow}>
      <span className="sr-only">Create new window</span>
      <span aria-hidden>+</span>
    </button>
  )
}
