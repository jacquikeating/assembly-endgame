import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import NewGameBtn from './components/NewGameBtn'

function App() {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])


    function guess(letter) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters(prevGuesses => [...prevGuesses, letter])
      }
    }

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} currentWord={currentWord} guess={guess} />
      <NewGameBtn />
    </>
  )
}

export default App
