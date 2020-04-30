import React, {useMemo} from 'react'
import {always, ascend, ifElse, isNil, prop, sort} from 'ramda'
import {useBrowserWindows} from '../hooks'
import {Frame} from './index'

export const OpenFrames = () => {
  const {activeUrl, openWindows} = useBrowserWindows()

  const sortedOpenWindows = useMemo(
    () => ifElse(isNil, always(null), sort(ascend(prop('width'))))(openWindows),
    [openWindows],
  )

  if (!activeUrl || !openWindows) return null

  return (
    <ul className="frame__list">
      {sortedOpenWindows.map((opts, i) => (
        <li key={i} className="frame__container">
          <Frame idx={i} src={activeUrl} {...opts} />
        </li>
      ))}
    </ul>
  )
}
