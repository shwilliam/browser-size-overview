import React, {useState} from 'react'
import {useBrowserWindows} from '../hooks'

const STEP_SIZE = 10

const SizeForm = ({idx, onSubmit}) => {
  const {openWindows, setOpenWindows} = useBrowserWindows()

  const [widthInput, setWidthInput] = useState(openWindows[idx]?.width)
  const [heightInput, setHeightInput] = useState(openWindows[idx]?.height)

  const handleSubmit = e => {
    if (e) e.preventDefault()

    setOpenWindows(s => {
      const sCopy = [...s]
      sCopy[idx] = {
        width: widthInput,
        height: heightInput,
      }

      return sCopy
    })

    onSubmit()
  }

  const incrementWidth = () => setWidthInput(s => s + STEP_SIZE)
  const decrementWidth = () => setWidthInput(s => s - STEP_SIZE)
  const incrementHeight = () => setHeightInput(s => s + STEP_SIZE)
  const decrementHeight = () => setHeightInput(s => s - STEP_SIZE)

  return (
    <form className="frame__dimensions-form" onSubmit={handleSubmit}>
      <label className="frame__dimensions-label">
        <p className="sr-only">Width</p>
        <input
          className="frame__dimensions-input"
          value={widthInput}
          onChange={e => setWidthInput(e.target.value)}
          type="text"
        />

        <button type="button" onClick={incrementWidth} aria-hidden>
          +
        </button>
        <button type="button" onClick={decrementWidth} aria-hidden>
          -
        </button>
      </label>
      x
      <label className="frame__dimensions-label">
        <p className="sr-only">Height</p>
        <input
          className="frame__dimensions-input"
          value={heightInput}
          onChange={e => setHeightInput(e.target.value)}
          type="text"
        />

        <button type="button" onClick={incrementHeight} aria-hidden>
          +
        </button>
        <button type="button" onClick={decrementHeight} aria-hidden>
          -
        </button>
      </label>
      <button type="submit">Update</button>
    </form>
  )
}

export default SizeForm
