
const Dish = ({name, price, image}) => {
  return (
    <article>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p><strong>Prix :</strong> {price}€</p>
    </article>
  )
}

export default Dish