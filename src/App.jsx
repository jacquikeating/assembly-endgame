import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import NewGameBtn from './components/NewGameBtn'

function App() {
    const [currentWord, setCurrentWord] = useState("react")

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word currentWord={currentWord} />
      <Keyboard />
      <NewGameBtn />
    </>
  )
}

export default App
