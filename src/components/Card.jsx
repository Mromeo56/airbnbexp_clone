function Card(props) {

    let badgeText;
    let item = props.item;

    if (props.openSpots === 0){
      badgeText="SOLD OUT"
    } else if (props.location === "Online"){
      badgeText="ONLINE"
    }

    return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../assets/${item.coverImg}`} className="card--image"/>
        <div className="card--stats">
            <img src="../assets/star.png" className="card--star"/>
            <span>{item.stats.rating}</span>
            <span className="gray">({item.stats.reviewCount}) • </span>
            <span className="gray">{item.location}</span>
        </div>
        <p className="card--title">{item.title}</p>
        <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
      </div>
    )
  }
  
  export default Card