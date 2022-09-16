
export default function CardDisplay({ thisCard }) {

    return (
        <div>
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