export default function Word({ currentWord }) {
    return (
<       section className="word-container">
            {Array.from(currentWord).map((letter, index) => {
                return (
                    <span key={index}>{letter.toUpperCase()}</span>
                )
            })}
        </section>
    )
}