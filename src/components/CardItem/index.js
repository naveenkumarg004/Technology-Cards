import './index.css'

const CardItem = props => {
  const {cardDet} = props
  const {title, description, imgUrl, className} = cardDet

  return (
    <li className={`cards ${className}`}>
      <h2 className="small-head">{title}</h2>
      <p className="small-para">{description}</p>
      <img className="icon" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
