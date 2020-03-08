import React, {useState} from 'react'
import {useBrowserWindows} from '../hooks'

const DeviceSelect = () => {
  const {
    openWindows,
    setOpenWindows,
    setActiveUrl,
    DEVICES,
  } = useBrowserWindows()
  const [selected, setSelected] = useState([])
  const [urlInput, setUrlInput] = useState('')

  const handleChange = e => setUrlInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setOpenWindows(selected)
    setActiveUrl(urlInput)
  }

  if (openWindows) return null

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your local URL..."
        type="text"
        value={urlInput}
        onChange={handleChange}
      />

      {Object.entries(DEVICES).map(([k, v]) => (
        <fieldset key={k}>
          <legend>{k}</legend>

          {v.map(({name, width, height}, i) => (
            <div key={name}>
              <input
                type="checkbox"
                id={name}
                name="device"
                onChange={e =>
                  e.target.checked
                    ? setSelected(s => [...s, {name, width, height}])
                    : setSelected(s => {
                        const sCopy = [...s]
                        sCopy.splice(i, 1)
                        return sCopy
                      })
                }
              />

              <label htmlFor={name}>
                {name} ({width}px x {height}px)
              </label>
            </div>
          ))}
        </fieldset>
      ))}

      <button type="submit">Get started</button>
    </form>
  )
}

export default DeviceSelect
