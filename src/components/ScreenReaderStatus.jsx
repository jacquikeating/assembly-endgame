export default function ScreenReaderStatus({ gameStatus }) {
    const [wrongGuessCount, isGameWon, isGameLost, isGameOver, isLastGuessIncorrect, guessesLeft, currentWord, guessedLetters, lastGuessedLetter] = gameStatus
    
    function announceCurrentWordOrNewGame() {
        if (isGameWon) {
            return (`Correct! The word is ${currentWord}. Press Enter to start a new game.`)
        } else if (isGameLost) {
            return (`Press Enter to start a new game.`)
        } else {
            return (`Current word:  
                ${currentWord.split("").map(letter => 
                    guessedLetters.includes(letter) ? letter + "." : "blank.")
                .join(" ")}`
            )
        }
    }

    return (
        <section className="sr-only" aria-live="polite" role="status">
            <p>
                {lastGuessedLetter && !isGameOver ? (
                    currentWord.includes(lastGuessedLetter) ? 
                    `Correct! ${lastGuessedLetter} is in the word.` : 
                    `Sorry, ${lastGuessedLetter} is not in the word.` 
                ) : ("")}
                
            </p>

            {!isGameOver && <p>You have {guessesLeft} attempts left.</p>}

            <p>{announceCurrentWordOrNewGame()}</p>
        </section>
    )
}