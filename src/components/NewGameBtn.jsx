export default function NewGameBtn({ btnRef }) {
    return (
        <button id="new-game" ref={btnRef} onClick={() => console.log("new game started")}>New Game</button>
    )
}