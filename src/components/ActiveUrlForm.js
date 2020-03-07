import React, {useState} from 'react'
import useBrowserWindows from '../hooks/useBrowserWindows'

const ActiveUrlForm = () => {
  const {setActiveUrl} = useBrowserWindows()
  const [urlInput, setUrlInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setActiveUrl(urlInput)
    setUrlInput('')
  }

  const handleChange = e => setUrlInput(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your local URL..."
        type="text"
        value={urlInput}
        onChange={handleChange}
      />

      <button type="submit">Load windows</button>
    </form>
  )
}

export default ActiveUrlForm
