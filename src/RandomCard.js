import axios from "axios"
import { useState } from "react"

export default function RandomCard() {

    const [thisCard, setThisCard] = useState({})
    const [formValue, setFormValue] = useState("")

    async function getRandomCard() {
        const url = `https://api.scryfall.com/cards/random`
        try {
            const response = await axios.get(url)
            console.log("RESPOSNE: ", response)
            setThisCard(response.data)

        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="card-container">
            <div>
                <button className="search-button" onClick={getRandomCard}>Random</button>
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
    )
}

/** 
    <p>id: {thisCard.id}</p>
    <p>artist_idss: {thisCard.artist_ids}</p>
    <p>border_color: {thisCard.border_color}</p>
    <p>card_back_id: {thisCard.card_back_id}</p>
    <p>cardmarket_id {thisCard.cardmarket_id}</p>
    <p>cmc: {thisCard.cmc}</p>
    <p>collector_number: {thisCard.collector_number}</p>
    <p>color_identity: {thisCard.color_identity}</p>
    <p>colors: {thisCard.colors}</p>
    <p>edhrec_rank: {thisCard.edhrec_rank}</p>
    <p>finishes: {thisCard.finishes}</p>
    <p>flavor_text: {thisCard.flavor_text}</p>
    <p>frame: {thisCard.frame}</p>
    <p>games: {thisCard.games}</p>
    <p>illustration_id: {thisCard.illustration_id}</p>
    <p>image_status: {thisCard.image_status}</p>
    <p>keywords: {thisCard.keywords}</p>
    <p>lang: {thisCard.lang}</p>
    <p>layout: {thisCard.layout}</p>
    <p>mana_cost: {thisCard.mana_cost}</p>
    <p>name: {thisCard.name}</p>
    <p>oracle_id: {thisCard.oracle_id}</p>
    <p>oracle_text: {thisCard.oracle_text}</p>
    <p>power: {thisCard.power}</p>
    <p>rarity: {thisCard.rarity}</p>
    <p>released_at: {thisCard.released_at}</p>
    <p>reserved: {thisCard.reserved ? "true" : "false"}</p>
    <p>set_name: {thisCard.set_name}</p>
    <p>toughness: {thisCard.toughness}</p>
    <p>type_line: {thisCard.type_line}</p>
    <p>uri: {thisCard.uri}</p>
    <p>rulings_uri: <a href={thisCard.rulings_uri}></a></p>
 */



/**
 * artist: "Carl Critchlow"
artist_ids: ['17948f16-611a-44b8-8d10-9895a0bdfff1']
booster: true
border_color: "black"
card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7"
cardmarket_id: 14038
cmc: 5
collector_number: "267"
color_identity: []
colors: []
digital: false
edhrec_rank: 18863
finishes: (2) ['nonfoil', 'foil']
flavor_text: "Venser admired his handiwork and smiled. His first prototype had joined with the hive mind all too well, running with the brood and becoming a predator itself. This one, he thought, would be accepted into the hive but still obey his commands."
foil: true
frame: "2003"
full_art: false
games: (2) ['paper', 'mtgo']
highres_image: true
id: "1e3c5a64-453b-4477-853a-9514ba326f16"
illustration_id: "1fe62c67-ae35-479f-81d5-22a07955ce31"
image_status: "highres_scan"
image_uris: {small: 'https://c1.scryfall.com/file/scryfall-cards/small/…3c5a64-453b-4477-853a-9514ba326f16.jpg?1562901355', normal: 'https://c1.scryfall.com/file/scryfall-cards/normal…3c5a64-453b-4477-853a-9514ba326f16.jpg?1562901355', large: 'https://c1.scryfall.com/file/scryfall-cards/large/…3c5a64-453b-4477-853a-9514ba326f16.jpg?1562901355', png: 'https://c1.scryfall.com/file/scryfall-cards/png/fr…3c5a64-453b-4477-853a-9514ba326f16.png?1562901355', art_crop: 'https://c1.scryfall.com/file/scryfall-cards/art_cr…3c5a64-453b-4477-853a-9514ba326f16.jpg?1562901355', …}
keywords: []
lang: "en"
layout: "normal"
legalities: {standard: 'not_legal', future: 'not_legal', historic: 'not_legal', gladiator: 'not_legal', pioneer: 'not_legal', …}
mana_cost: "{5}"
mtgo_foil_id: 25900
mtgo_id: 25899
multiverse_ids: [125866]
name: "Venser's Sliver"
nonfoil: true
object: "card"
oracle_id: "54d65915-3833-4e4d-a066-37ae9507846f"
oracle_text: ""
oversized: false
power: "3"
prices: {usd: '0.22', usd_foil: '0.62', usd_etched: null, eur: '0.20', eur_foil: '0.10', …}
prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A54d65915-3833-4e4d-a066-37ae9507846f&unique=prints"
promo: false
purchase_uris: {tcgplayer: 'https://www.tcgplayer.com/product/14416?page=1&utm…aign=affiliate&utm_medium=api&utm_source=scryfall', cardmarket: 'https://www.cardmarket.com/en/Magic/Products/Searc…n=card_prices&utm_medium=text&utm_source=scryfall', cardhoarder: 'https://www.cardhoarder.com/cards/25899?affiliate_…ign=affiliate&utm_medium=card&utm_source=scryfall'}
rarity: "common"
related_uris: {gatherer: 'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=125866', tcgplayer_infinite_articles: 'https://infinite.tcgplayer.com/search?contentMode=…aign=affiliate&utm_medium=api&utm_source=scryfall', tcgplayer_infinite_decks: 'https://infinite.tcgplayer.com/search?contentMode=…aign=affiliate&utm_medium=api&utm_source=scryfall', edhrec: 'https://edhrec.com/route/?cc=Venser%27s+Sliver'}
released_at: "2006-10-06"
reprint: false
reserved: false
rulings_uri: "https://api.scryfall.com/cards/1e3c5a64-453b-4477-853a-9514ba326f16/rulings"
scryfall_set_uri: "https://scryfall.com/sets/tsp?utm_source=api"
scryfall_uri: "https://scryfall.com/card/tsp/267/vensers-sliver?utm_source=api"
set: "tsp"
set_id: "c1d109bc-ffd8-428f-8d7d-3f8d7e648046"
set_name: "Time Spiral"
set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Atsp&unique=prints"
set_type: "expansion"
set_uri: "https://api.scryfall.com/sets/c1d109bc-ffd8-428f-8d7d-3f8d7e648046"
story_spotlight: false
tcgplayer_id: 14416
textless: false
toughness: "3"
type_line: "Artifact Creature — Sliver"
uri: "https://api.scryfall.com/cards/1e3c5a64-453b-4477-853a-9514ba326f16"
variation: false
 */