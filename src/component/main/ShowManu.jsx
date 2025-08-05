import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ShowManu = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const items = [
      {
        id: 1,
        name: 'Pizza',
        image: 'https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg',
      },
      {
        id: 2,
        name: 'Burger',
        image: 'https://source.unsplash.com/300x200/?burger',
      },
      {
        id: 3,
        name: 'Pasta',
        image: 'https://source.unsplash.com/300x200/?pasta',
      },
    ];
    setFoodItems(items);
  }, []);

  return (
    <Container className="mt-4">
      <h3>Menu</h3>
      <p>Total food items: <strong>{foodItems.length}</strong></p>
      <Row>
        {foodItems.map(item => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {/* Add price or description if needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowManu;
