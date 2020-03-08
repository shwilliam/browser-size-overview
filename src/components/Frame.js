import React, {useState} from 'react'
import SizeForm from './SizeForm'

const Frame = ({idx, src, name, width, height}) => {
  const [isEditingDimensions, setIsEditingDimensions] = useState(false)
  const toggleDimensionsForm = () => setIsEditingDimensions(s => !s)

  return (
    <>
      <section>
        <p className="frame__device-name">{name || 'Custom'}</p>

        <div className="frame__info">
          {isEditingDimensions ? (
            <SizeForm idx={idx} onSubmit={toggleDimensionsForm} />
          ) : (
            <>
              <p>
                {width}px x {height}px
              </p>
            </>
          )}

          <button
            className="frame__edit-btn"
            type="button"
            onClick={toggleDimensionsForm}
          >
            {isEditingDimensions ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </section>

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
    </>
  )
}

export default Frame
