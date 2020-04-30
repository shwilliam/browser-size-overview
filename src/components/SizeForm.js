import React, {useState} from 'react'
import {add, subtract, update, findIndex, propEq, __} from 'ramda'
import {useBrowserWindows} from '../hooks'

const STEP_SIZE = 10

export const SizeForm = ({name, onSubmit, width, height}) => {
  const {openWindows, setOpenWindows} = useBrowserWindows()

  const [widthInput, setWidthInput] = useState(width)
  const [heightInput, setHeightInput] = useState(height)

  const handleSubmit = e => {
    if (e) e.preventDefault()

    setOpenWindows(
      update(findIndex(propEq('name', name), openWindows), {
        width: widthInput,
        height: heightInput,
      }),
    )

    onSubmit()
  }

  const incrementWidth = () => setWidthInput(add(STEP_SIZE))
  const decrementWidth = () => setWidthInput(subtract(__, STEP_SIZE))
  const incrementHeight = () => setHeightInput(add(STEP_SIZE))
  const decrementHeight = () => setHeightInput(subtract(__, STEP_SIZE))

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
