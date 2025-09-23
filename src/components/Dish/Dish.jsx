import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./dish.scss";

const Dish = ({ name, price, image, isNew }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
          {isNew && (
            <Badge bg="primary" className="badge">
              Nouveau
            </Badge>
          )}
      <Card.Body>
        <Card.Title>{name}
        </Card.Title>
        <Card.Text>
          {price}€
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
