/* eslint-disable react/prop-types */

export default function Card(props) {

    let badgeText 
    if (props.data.openSpots === 0)
    badgeText = 'SOLD OUT'
    else if (props.data.location === "Online")
    badgeText = 'ONLINE'
    
    return (
        <div className="card">
           { badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/${props.data.coverImg}`} className="card--image" />
            <div>
                <img src="/star.png" className="card--star" />
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p>From <span>${props.data.price}</span> / person</p>
        </div>
    )
}