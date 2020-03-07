import React from 'react'
import './styles.css'
import {BrowserWindowContextProvider} from './context/browser-windows'
import {ActiveUrlForm, OpenFrames, NewWindowButton} from './components'

const App = () => (
  <div className="site">
    <BrowserWindowContextProvider>
      <header>
        <h1>Browser size overview</h1>
        <ActiveUrlForm />
      </header>

      <main>
        <NewWindowButton />
        <OpenFrames />
      </main>
    </BrowserWindowContextProvider>
  </div>
)

export default App
