import axios from "axios"
import React, { useState, useEffect } from "react"

export default function CardSearchForm() {

    const [thisCard, setThisCard] = useState({})
    const [formValue, setFormValue] = useState("")
    const [cardPrefill, setCardPrefill] = useState({})
    const [cardPrefillContent, setCardPrefillContent] = useState()

    useEffect(() => {
        async function updatePrefill() {
            const url = `https://api.scryfall.com/cards/autocomplete?q=${formValue}`
            try {
                const response = await axios.get(url)
                setCardPrefill(response.data.data)
                console.log("cardPrefill:", cardPrefill)
                if (cardPrefill.length) {
                    setCardPrefillContent(() => 
                        cardPrefill.map((card, i) => (
                            <div key={i} onClick={() => searchFromPrefill(card)}>{card}</div>
                        ))
                    )
                }
            } catch (error) {
                console.error(error)
            }
        }
        updatePrefill()
    }, [formValue])

    async function searchFromPrefill(cardName) {
        const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`
        try {
            const response = await axios.get(url)
            setThisCard(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function searchForCard(event) {
        event.preventDefault()
        const url = `https://api.scryfall.com/cards/named?fuzzy=${formValue}`
        try {
            const response = await axios.get(url)
            setThisCard(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleChange(event) {
        event.preventDefault()
        setFormValue(event.target.value)
    }

    return (
        <>
            <div className="card-container">
                <div>
                    <form>
                        <button className="search-button" onClick={searchForCard}>Search</button>
                        <input onChange={handleChange} value={formValue} name="card-search-name" id="card-search-name" type="text"></input>
                        {cardPrefillContent}
                    </form>
                </div>
                <div>
                    { thisCard.image_uris ? <div><img className="card-md" src={thisCard.image_uris.normal} alt="image"/></div> : <div className="card-md"></div> }
                </div>
                <div className="card-info">
                    <p className="bold">name: </p><p>{thisCard.name}</p>
                    <p className="bold">mana_cost: </p><p>{thisCard.mana_cost}</p>
                    <p className="bold">set_name: </p><p>{thisCard.set_name}</p>
                    <p className="bold">released_at: </p><p>{thisCard.released_at}</p>
                    <p className="bold">colors: </p><p>{thisCard.colors}</p>
                    <p className="bold">oracle_text: </p><p>{thisCard.oracle_text}</p>
                    <p className="bold">edhrec_rank: </p><p>{thisCard.edhrec_rank}</p>
                    <p className="bold">rarity: </p><p>{thisCard.rarity}</p>
                    <p className="bold">type_line: </p><p>{thisCard.type_line}</p>
                </div>
            </div>
        </>
    )
}