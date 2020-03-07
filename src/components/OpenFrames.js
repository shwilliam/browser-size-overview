import React from 'react'
import {Frame} from './index'
import {useBrowserWindows} from '../hooks'

const OpenFrames = () => {
  const {activeUrl, openWindows} = useBrowserWindows()

  if (!activeUrl || !openWindows) return null

  return (
    <ul className="frame__list">
      {openWindows?.map((opts, i) => (
        <li key={i} className="frame__container">
          <Frame idx={i} src={activeUrl} {...opts} />
        </li>
      ))}
    </ul>
  )
}

export default OpenFrames
