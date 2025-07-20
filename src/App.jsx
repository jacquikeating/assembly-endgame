import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import NewGameBtn from './components/NewGameBtn'
import { languages } from "./utils.js"

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1 
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    const gameStatus = [wrongGuessCount, isGameWon, isGameLost, isGameOver, isLastGuessIncorrect]

    // Functions
    function guess(letter) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters(prevGuesses => [...prevGuesses, letter])
      }
    }

  return (
    <main>
      <Header />
      <Status gameStatus={gameStatus} />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} currentWord={currentWord} guess={guess} isGameOver={isGameOver} />
      { isGameOver && <NewGameBtn /> }
    </main>
  )
}

export default App
