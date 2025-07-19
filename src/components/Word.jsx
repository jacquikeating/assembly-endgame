export default function Word({ currentWord, guessedLetters }) {
    return (
<       section className="word-container">
            {Array.from(currentWord).map((letter, index) => {
                return (
                    <span key={index}>
                        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
}