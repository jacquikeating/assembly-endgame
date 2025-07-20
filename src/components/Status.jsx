import { clsx } from 'clsx';
import { languages, getFarewellText } from "../utils.js"

export default function Status({ gameStatus }) {
    const [wrongGuessCount, isGameWon, isGameLost, isGameOver, isLastGuessIncorrect] = gameStatus
    
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
        } else if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-msg">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
            )

        } else {
            return null
        }
    }

    const gameStatusClass = clsx("status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: isLastGuessIncorrect
    })

    return (
        <section className={gameStatusClass}>
            {messageContent()}
        </section>
    )
}