

export default function ListOfDecks({ decks }) {

    const decksListContent = decks.map((deck, index) => (
        <p key={index}>{deck.name}</p>
    ))

    return (
        <div>
            {decksListContent}
        </div>
    )

}