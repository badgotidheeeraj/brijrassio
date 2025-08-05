import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Form, Badge } from 'react-bootstrap';

const ShowManu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const items = [
  {
    id: 1,
    name: 'Veggie Burger',
    category: 'main_course',
    description: 'A delicious veggie burger with fresh lettuce and tomato',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 2,
    name: 'Chicken Pizza',
    category: 'main_course',
    description: 'A mouth-watering chicken pizza with melted mozzarella cheese',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 3,
    name: 'Sushi Rolls',
    category: 'appetizer',
    description: 'Fresh sushi rolls with avocado and cucumber',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGklMjByb2xsc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    available: false,
  },
  {
    id: 4,
    name: 'Tacos',
    category: 'main_course',
    description: 'Crunchy tacos with seasoned beef and salsa',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1563379926898-05f457612168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 5,
    name: 'Fruit Salad',
    category: 'dessert',
    description: 'A refreshing fruit salad with a mix of seasonal fruits',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1560780552-8e0f8ba34f08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 6,
    name: 'Grilled Chicken',
    category: 'main_course',
    description: 'A juicy grilled chicken breast with roasted vegetables',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1628840042734-259325671155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 7,
    name: 'Pasta Primavera',
    category: 'main_course',
    description: 'A flavorful pasta primavera with mixed vegetables and herbs',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1627305418628-7ae2c0c2f296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBwcmltYXZlcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    available: false,
  },
  {
    id: 8,
    name: 'Biryani',
    category: 'main_course',
    description: 'Aromatic biryani with basmati rice and marinated chicken',
    price: 329.99,
    image: 'https://images.unsplash.com/photo-1633259584602-692ba2e9d62f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 9,
    name: 'Ice Cream',
    category: 'dessert',
    description: 'Creamy ice cream with a choice of flavors',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1497032628191-a3a544a1d1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    available: true,
  },
  {
    id: 10,
    name: 'Falafel',
    category: 'appetizer',
    description: 'Crispy falafel with tahini sauce and pita bread',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1628840042747-6b3c8b33d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    available: true,
  },
];
    setFoodItems(items);
    setFilteredItems(items);
  }, []);

  const formatCategory = (cat) => {
    const mapping = {
      starter: 'Starter',
      main_course: 'Main Course',
      dessert: 'Dessert',
      beverage: 'Beverage',
      thali: 'Thali',
    };
    return mapping[cat] || cat;
  };

  const toggleAvailability = (id) => {
    const updatedItems = foodItems.map((item) =>
      item.id === id ? { ...item, available: !item.available } : item
    );
    setFoodItems(updatedItems);
    applyFilters(updatedItems, selectedCategory, searchQuery);
  };

  const applyFilters = (items, category, query) => {
    let result = items;

    if (category !== 'all') {
      result = result.filter((item) => item.category === category);
    }

    if (query.trim() !== '') {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredItems(result);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    applyFilters(foodItems, newCategory, searchQuery);
  };

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    applyFilters(foodItems, selectedCategory, newQuery);
  };

  return (
    <Container className="mt-4">
      <style>{`
        .big-switch .form-check-input {
          width: 3rem;
          height: 1.5rem;
        }

        .big-switch .form-check-label {
          font-size: 1.1rem;
          font-weight: bold;
          margin-left: 0.5rem;
        }
      `}</style>

      <h3 className="mb-0">Menu</h3>

      {/* Filter controls */}
      <Row className="mb-3 ">
        <Col xs={12} md={4} className="mb-2">
          <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            <option value="starter">Starter</option>
            <option value="main_course">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
            <option value="thali">Thali</option>
          </Form.Select>
        </Col>
        <Col xs={12} md={4}>
          <Form.Control
            type="search"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search food items by name"
          />
        </Col>
      </Row>

      <p className="text-center">
        Total food items: <strong>{filteredItems.length}</strong>
      </p>

      <Row className="g-4">
        {filteredItems.length === 0 ? (
          <Col>
            <p className="text-center text-muted">No items found.</p>
          </Col>
        ) : (
          filteredItems.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}>
              <Card
                className="h-100 shadow-sm"
                style={{ cursor: 'default', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {item.image && (
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{ height: 180, objectFit: 'cover' }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="mb-0" style={{ fontSize: '1.2rem' }}>
                      {item.name}
                    </Card.Title>
                    <Badge
                      bg={item.available ? 'success' : 'secondary'}
                      style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </div>

                  <Badge
                    bg="info"
                    text="dark"
                    className="mb-2"
                    style={{ fontSize: '0.75rem', alignSelf: 'flex-start' }}
                  >
                    {formatCategory(item.category)}
                  </Badge>

                  <Card.Text className="flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {item.description.length > 80
                      ? item.description.slice(0, 80) + '...'
                      : item.description}
                  </Card.Text>
                  <h5 className="mt-auto" style={{ fontWeight: '600' }}>
                    ₹ {item.price.toFixed(2)}
                  </h5>

                  {/* Bigger Toggle Switch for Availability */}
                  <Form.Check
                    type="switch"
                    id={`availability-switch-${item.id}`}
                    label={item.available ? 'Available' : 'Unavailable'}
                    checked={item.available}
                    onChange={() => toggleAvailability(item.id)}
                    className="mt-3 big-switch"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ShowManu;
