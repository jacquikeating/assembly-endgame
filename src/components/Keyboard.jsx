import { clsx } from 'clsx';

export default function Keyboard({ guessedLetters, currentWord, guess}) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")



    return (
        <section className="keyboard">
            {alphabet.map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter)
                const isCorrect = isGuessed && currentWord.includes(letter)
                const isIncorrect = isGuessed && !currentWord.includes(letter)
                const className = clsx({
                    correct: isCorrect,
                    incorrect: isIncorrect
                })

                return (
                    <button 
                        key={index}
                        className={className}
                        onClick={() => guess(letter)}
                        >
                            {letter.toUpperCase()}
                        </button>
                )
            })}
        </section>
    )
}