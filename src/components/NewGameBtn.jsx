export default function NewGameBtn({ btnRef, startNewGame }) {
    return (
        <button id="new-game" ref={btnRef} onClick={startNewGame}>New Game</button>
    )
}