import { languages } from "../utils.js"

export default function Languages({ wrongGuessCount }) {
    return (
        <section className="languages-container">
            {languages.map((lang, index) => {
                    return (
                        <span
                            className={index < wrongGuessCount ? "chip lost" : "chip"} 
                            style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                            key={index}
                        >
                            {lang.name}
                        </span>
                    )
                })}
        </section>
    )
}