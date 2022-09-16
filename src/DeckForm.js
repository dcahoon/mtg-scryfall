import { useState } from "react"

export default function DeckForm({ decks, setDecks }) {

    const starterFormInput = {
        name: "",
        format: "standard",
        cards: [],
        commander: "",
    }

    const [newDeck, setNewDeck] = useState(starterFormInput)

    function handleSubmit(event) {
        event.preventDefault()
        setDecks([...decks, newDeck])
    }

    const handleChange = ({ target }) => {
        setNewDeck({
            ...newDeck,
            [target.name]: target.value
        })
    }

    const changeFormat = ({ target }) => {
        console.log("target:", target)
        setNewDeck({
            ...newDeck,
            format: target.value,
        })
        console.log("newDeck", newDeck)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="deck-name">Deck Name</label>
            <input name="name" id="name" type="text" value={newDeck.name} placeholder="Deck name..." onChange={handleChange}></input>
            <div>
                <input type="radio" id="standard" name="deck_format" value="standard" onChange={changeFormat} />
                <label htmlFor="standard">Standard</label>
                <input type="radio" id="modern" name="deck_format" value="modern" onChange={changeFormat} />
                <label htmlFor="modern">Modern</label>
                <input type="radio" id="edh" name="deck_format" value="edh" onChange={changeFormat} />
                <label htmlFor="edh">EDH</label>
            </div>
            <label htmlFor="commander">
                Commander:
                <input name="commander" id="commander" type="text" value={newDeck.commander} placeholder="Commander name..." onChange={handleChange}></input>
            </label><br/>
            <button type="submit">Add Deck</button>
        </form>
    )
}



