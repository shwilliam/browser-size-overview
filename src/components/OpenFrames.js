import React from 'react'
import {Frame, SizeForm} from './index'
import {useBrowserWindows} from '../hooks'

const OpenFrames = () => {
  const {activeUrl, openWindows} = useBrowserWindows()

  if (!activeUrl || !openWindows) return null

  return (
    <ul className="frame__list">
      {openWindows?.map((opts, i) => (
        <li key={i} className="frame__container">
          <SizeForm idx={i} size={opts.windows} />
          <Frame src={activeUrl} {...opts} />
        </li>
      ))}
    </ul>
  )
}

export default OpenFrames
