import { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import ScreenReaderStatus from './components/ScreenReaderStatus.jsx'
import Keyboard from './components/Keyboard'
import NewGameBtn from './components/NewGameBtn'
import Confetti from 'react-confetti'
import { languages, getRandomWord } from "./utils.js"

function App() {
    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
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
    useEffect(() => {
      const onKeyDown = (e) => {
        const isAlphabet = /^[a-zA-Z]$/.test(e.key);
        const alreadyGuessed = guessedLetters.includes(e.key)
        if (isAlphabet && !alreadyGuessed && !isGameOver) {
            guess(e.key)
        }
      }
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    },[isGameOver])

    function guess(letter) {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters(prevGuesses => [...prevGuesses, letter])
      }
    }

    function startNewGame() {
      setCurrentWord(getRandomWord())
      setGuessedLetters([])
    }

    useEffect(() => {
      if (isGameOver && newGameBtn.current !== null) {
        newGameBtn.current.focus()
      }
    }, [isGameOver])


  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <Status gameStatus={gameStatus} />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost} />
      <ScreenReaderStatus gameStatus={gameStatus} />
      <Keyboard guessedLetters={guessedLetters} currentWord={currentWord} guess={guess} isGameOver={isGameOver} />
      { isGameOver && <NewGameBtn btnRef={newGameBtn} startNewGame={startNewGame} /> }
    </main>
  )
}

export default App
