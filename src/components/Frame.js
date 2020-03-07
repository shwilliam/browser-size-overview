import React, {useState} from 'react'
import SizeForm from './SizeForm'

const Frame = ({idx, src, width, height}) => {
  const [isEditingDimensions, setIsEditingDimensions] = useState(false)
  const toggleDimensionsForm = () => setIsEditingDimensions(s => !s)

  return (
    <>
      <iframe
        title="Demo window"
        src={src}
        className="frame__window"
        style={{height: `${height}px`, width: `${width}px`}}
        name="targetframe"
        frameBorder="0"
      />

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
