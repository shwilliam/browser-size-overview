import React, {useState} from 'react'
import {useBrowserWindows} from '../hooks'

const OptionsForm = () => {
  const {
    openWindows,
    setOpenWindows,
    setActiveUrl,
    DEVICES,
  } = useBrowserWindows()
  const [selected, setSelected] = useState(
    Object.entries(DEVICES)
      .reduce(
        (defaultSelected, [k, v]) => [
          ...defaultSelected,
          v
            .filter(({is_default}) => !!is_default)
            .map(({name, width, height}) => ({
              name,
              width,
              height,
            })),
        ],
        [],
      )
      .flat(),
  )
  const [urlInput, setUrlInput] = useState('http://localhost:8080/')

  const handleChange = e => setUrlInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setOpenWindows(selected)
    setActiveUrl(urlInput)
  }

  if (openWindows) return null

  return (
    <form onSubmit={handleSubmit}>
      <label className="site__options-label">
        <p>Development URL:</p>

        <input
          placeholder="Enter your local URL..."
          type="text"
          value={urlInput}
          onChange={handleChange}
        />
      </label>

      <div className="site__options-fieldset-container">
        {Object.entries(DEVICES).map(([k, v]) => (
          <fieldset className="site__options-fieldset" key={k}>
            <legend>{k}</legend>

            {v.map(({name, width, height, is_default}, i) => (
              <div key={name}>
                <input
                  type="checkbox"
                  id={name}
                  name="device"
                  checked={is_default || selected?.some(d => d.name === name)}
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

                <label htmlFor={name}>{name}</label>
              </div>
            ))}
          </fieldset>
        ))}
      </div>

      <button type="submit">Get started</button>
    </form>
  )
}

export default OptionsForm
