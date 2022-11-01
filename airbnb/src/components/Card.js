import React from "react";

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.coverImg}`} />
            <div>
                <img className="star" src="../images/star.png" />
                <span><b>{props.stats.rating}</b> ({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <div>{props.title}</div>
            <div><b>From ${props.price}</b> / person</div>
        </div>
    )
}