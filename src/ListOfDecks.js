

export default function ListOfDecks({ decks, setSelectedDeck }) {

    const decksListContent = decks.map((deck, index) => (
        <div className="deck-name" key={index} onClick={setSelectedDeck(deck)}>{deck.name}</div>
    ))

    return (
        <div>
            {decksListContent}
        </div>
    )

}