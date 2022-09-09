import { useState } from "react"

export default function NewDeckForm() {

    const [deckName, setDeckName] = useState("")

    function handleSubmit(event) {
        
    }

    const handleChange = ({ target }) => {
        setDeckName(target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="deck-name">Deck Name</label>
            <input name="deck-name" id="deck-name" type="text" value={deckName} onChange={handleChange}></input>
            <button type="submit">Add</button>
        </form>
    )

}