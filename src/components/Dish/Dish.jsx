import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./dish.scss";

const Dish = ({ name, price, image, isNew }) => {
  const handleClick = (dishNanme) => {
    alert(`Le plat ${dishNanme} est maintenant dans votre panier`);
  };
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
        <Button variant="primary" onClick={() => handleClick(name)}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dish;
