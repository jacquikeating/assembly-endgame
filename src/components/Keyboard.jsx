export default function Keyboard() {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")

    return (
        <section className="keyboard">
            {alphabet.map((letter, index) => {
                return (
                    <button key={index}>{letter.toUpperCase()}</button>
                )
            })}
        </section>
    )
}