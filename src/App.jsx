import Dish from "./components/Dish/Dish";
import Footer from "./components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Header from "./components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./App.scss";

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const handleShowNewOnly = () => {
    setShowNewOnly(prevShowNewOnly => !prevShowNewOnly);
  };
  const dishes = [
    {
      name: "Tacos à l’unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
      stock: 12,
    },
    {
      name: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
      stock: 0,
    },
    {
      name: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
      stock: 5,
    },
  ];

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <>
      <Header />
      <main>
        <Container>
          <Button variant="secondary" onClick={handleShowNewOnly}>
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
          </Button>
          <Row>
            {filteredDishes.map((dish, index) => (
              <Col md={4} key={index}>
                <Dish
                  name={dish.name}
                  price={dish.price}
                  image={dish.image}
                  isNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
