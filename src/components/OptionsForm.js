import React, {useState} from 'react'
import {
  any,
  append,
  compose,
  filter,
  findIndex,
  flatten,
  propEq,
  remove,
  values,
} from 'ramda'
import {useBrowserWindows} from '../hooks'

export const OptionsForm = () => {
  const {
    openWindows,
    setOpenWindows,
    setActiveUrl,
    DEVICES,
  } = useBrowserWindows()
  const [selected, setSelected] = useState(
    compose(filter(propEq('is_default', true)), flatten, values)(DEVICES),
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
    <form onSubmit={handleSubmit} className="site__options-form">
      <div className="site__options-input-container">
        <label className="site__options-label">
          <span className="sr-only">Development URL</span>

          <input
            className="site__options-input"
            placeholder="Enter your local URL..."
            type="text"
            value={urlInput}
            onChange={handleChange}
            required
          />
        </label>

        <button className="site__options-submit" type="submit">
          Get started
        </button>
      </div>

      <div className="site__options-fieldset-container">
        {Object.entries(DEVICES).map(([k, v]) => (
          <fieldset className="site__options-fieldset" key={k}>
            <legend>{k}</legend>

            {v.map(({name, width, height}) => (
              <div key={name}>
                <label htmlFor={name}>
                  <input
                    type="checkbox"
                    id={name}
                    name="device"
                    checked={any(propEq('name', name))(selected)}
                    onChange={() =>
                      setSelected(s =>
                        any(propEq('name', name))(selected)
                          ? remove(findIndex(propEq('name', name), s), 1, s)
                          : append({name, width, height}, s),
                      )
                    }
                  />
                  {name}
                </label>
              </div>
            ))}
          </fieldset>
        ))}
      </div>
    </form>
  )
}
