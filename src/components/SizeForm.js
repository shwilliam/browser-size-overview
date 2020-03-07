import React, {useState} from 'react'
import {useBrowserWindows} from '../hooks'

const SizeForm = ({idx}) => {
  const {openWindows, setOpenWindows} = useBrowserWindows()

  const [widthInput, setWidthInput] = useState(openWindows[idx]?.width)
  const [heightInput, setHeightInput] = useState(openWindows[idx]?.height)

  const handleSubmit = e => {
    e.preventDefault()
    setOpenWindows(s => {
      const sCopy = [...s]
      sCopy[idx] = {
        width: widthInput,
        height: heightInput,
      }

      return sCopy
    })
  }

  return (
    <form class="frame__dimensions-form" onSubmit={handleSubmit}>
      <label>
        Width:
        <input
          className="frame__dimensions-input"
          value={widthInput}
          onChange={e => setWidthInput(e.target.value)}
          type="text"
        />
      </label>

      <label>
        Height:
        <input
          className="frame__dimensions-input"
          value={heightInput}
          onChange={e => setHeightInput(e.target.value)}
          type="text"
        />
      </label>

      <button type="submit">Update</button>
    </form>
  )
}

export default SizeForm
