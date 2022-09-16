
export default function DeckInfo({ selectedDeck }) {
    
    if (selectedDeck) {
        
        if (selectedDeck.cards) {
            const cardNames = selectedDeck.cards.map((card, index) => (
                <div className="hover-grey" key={index}>{card.name}</div>
            ))
            return (
                <div className="flex">
                    <div>
                        <div>{selectedDeck.name}</div>
                        <div>Format: {selectedDeck.format}</div>
                        {selectedDeck.format === "edh" ? <div>Commander: {selectedDeck.commander}</div> : null}
                    </div>
                    <div>Cards: <div>{cardNames}</div></div>
                </div>
            )
        } else {
            const cardNames = ["No cards"]
            return (
                <div className="flex">
                    <div>{selectedDeck.name}</div>
                    <div>Format: {selectedDeck.format}</div>
                    {selectedDeck.format === "edh" ? <div>Commander: {selectedDeck.commander}</div> : null}
                    <div>Cards: {cardNames}</div>
                </div>
            )
        }
    } else {
        return null
    }
}