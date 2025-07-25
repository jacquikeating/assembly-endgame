import { clsx } from 'clsx';

export default function Keyboard({ guessedLetters, currentWord, guess, isGameOver }) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")

    return (
        <section className={isGameOver ? "keyboard disabled" : "keyboard"}>
            {alphabet.map((letter, index) => {
                const clsxClass = clsx({
                    correct: guessedLetters.includes(letter) && currentWord.includes(letter),
                    incorrect: guessedLetters.includes(letter) && !currentWord.includes(letter)
                })

                return (
                    <button 
                        key={index}
                        className={clsxClass}
                        onClick={() => guess(letter)}
                        disabled={isGameOver || guessedLetters.includes(letter)}
                        aria-disabled={isGameOver || guessedLetters.includes(letter)}
                        >
                            {letter.toUpperCase()}
                    </button>
                )
            })}
        </section>
    )
}