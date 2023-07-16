import star from "../images/star.png"

function HomeFeaturedSection(props) {

  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "UNAVAILABLE"
    } else if (props.item.city === "Online") {
        badgeText = "AVAILABLE"
    }

  return ( 
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.image} alt="z#" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="#" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.city}</span>
      </div>
      <p>{props.item.title}</p>
      <p> <span className="bold">From {props.item.price} </span>/ person</p>
      <p>{props.item.description}</p>
      

    </div>
   );
}

export default HomeFeaturedSection;