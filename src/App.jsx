import { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import ScreenReaderStatus from './components/ScreenReaderStatus.jsx'
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
    const guessesLeft = (languages.length - 1) - wrongGuessCount
    const gameStatus = [wrongGuessCount, isGameWon, isGameLost, isGameOver, isLastGuessIncorrect, guessesLeft, currentWord, guessedLetters, lastGuessedLetter]

    // Static values
    const newGameBtn = useRef(null)

    // Functions
    function guess(letter) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters(prevGuesses => [...prevGuesses, letter])
      }
    }

    useEffect(() => {
      if (isGameOver && newGameBtn.current !== null) {
        newGameBtn.current.focus()

      }
    }, [isGameOver])

  return (
    <main>
      <Header />
      <Status gameStatus={gameStatus} />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <ScreenReaderStatus gameStatus={gameStatus} />
      <Keyboard guessedLetters={guessedLetters} currentWord={currentWord} guess={guess} isGameOver={isGameOver} />
      { isGameOver && <NewGameBtn btnRef={newGameBtn} /> }
    </main>
  )
}

export default App
