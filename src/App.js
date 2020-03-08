import React from 'react'
import './styles.css'
import {BrowserWindowContextProvider} from './context/browser-windows'
import {OpenFrames, NewWindowButton, OptionsForm} from './components'

const App = () => (
  <div className="site">
    <BrowserWindowContextProvider>
      <header className="site__header">
        <h1 className="site__title">Browser size overview</h1>
      </header>

      <main className="site__main">
        <OpenFrames />

        <NewWindowButton />

        <section className="site__options">
          <OptionsForm />
        </section>
      </main>
    </BrowserWindowContextProvider>
  </div>
)

export default App
