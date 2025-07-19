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

    
    return (
        <section className="status">
            {messageContent()}
        </section>
    )
}