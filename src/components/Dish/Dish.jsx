import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import useCart  from "../../hooks/useCart";
import "./dish.scss";

const Dish = ({ name, price, image, isNew}) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      {isNew && (
        <Badge bg="primary" className="badge">
          Nouveau
        </Badge>
      )}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
        <Button variant="danger" onClick={removeFromCart} className="ms-2">
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dish;
