export default function Keyboard({ guessedLetter, guess}) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")

    return (
        <section className="keyboard">
            {alphabet.map((letter, index) => {
                return (
                    <button 
                        key={index}
                        onClick={() => guess(letter)}
                        >
                            {letter.toUpperCase()}
                        </button>
                )
            })}
        </section>
    )
}