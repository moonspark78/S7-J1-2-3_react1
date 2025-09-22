
const Dish = ({name, description, price, image, stock}) => {
  return (
    <article>
        <img src={image} alt={name} width={350} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Prix :</strong> {price}</p>
        <p><strong>Stock :</strong>{stock}</p>
    </article>
  )
}

export default Dish