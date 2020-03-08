import React, {useState} from 'react'
import SizeForm from './SizeForm'
import {useBrowserWindows} from '../hooks'

const Frame = ({idx, src, width, height}) => {
  const {setOpenWindows} = useBrowserWindows()
  const [isEditingDimensions, setIsEditingDimensions] = useState(false)
  const toggleDimensionsForm = () => setIsEditingDimensions(s => !s)

  return (
    <>
      <div className="frame__window-container">
        <iframe
          title="Demo window"
          src={src}
          className="frame__window"
          style={{height: `${height}px`, width: `${width}px`}}
          name="targetframe"
          frameBorder="0"
        />
      </div>

      <section className="frame__info">
        {isEditingDimensions ? (
          <SizeForm idx={idx} />
        ) : (
          <p>
            {width}px x {height}px
          </p>
        )}

        <button type="button" onClick={toggleDimensionsForm}>
          {isEditingDimensions ? 'Cancel' : 'Edit'}
        </button>
      </section>
    </>
  )
}

export default Frame
