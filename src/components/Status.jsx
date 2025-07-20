import { clsx } from 'clsx';
import { languages, getFarewellText } from "../utils.js"

export default function Status({ isGameWon, isGameLost }) {

    function messageContent() {
        if (isGameWon){
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    const gameStatusClass = clsx("status", {
        won: isGameWon,
        lost: isGameLost
    })

    return (
        <section className={gameStatusClass}>
            {messageContent()}
        </section>
    )
}