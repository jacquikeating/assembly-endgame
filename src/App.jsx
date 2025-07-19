import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import NewGameBtn from './components/NewGameBtn'

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    let wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length

    // Functions
    function guess(letter) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters(prevGuesses => [...prevGuesses, letter])
      }
    }

  return (
    <>
      <Header />
      <Status />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} currentWord={currentWord} guess={guess} />
      <NewGameBtn />
    </>
  )
}

export default App
