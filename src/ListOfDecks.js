

export default function ListOfDecks({ decks, handleSetDeck }) {

    const decksListContent = decks.map((deck, index) => (
        <div className="hover-grey" key={index} onClick={() => handleSetDeck(deck)}>{deck.name}</div>
    ))

    return (
        <div>
            {decksListContent}
        </div>
    )

}