import { languages } from "../languages.js"

export default function Languages() {
    return (
        <section className="languages-container">
            {languages.map((lang, index) => {
                    return (
                        <span
                            className="language-chip" 
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