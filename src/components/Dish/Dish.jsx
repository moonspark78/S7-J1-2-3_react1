import Card from "react-bootstrap/Card";
import "./dish.scss";

const Dish = ({ name, price, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Prix : {price}€
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
