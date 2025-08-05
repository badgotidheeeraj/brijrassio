


import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";

const AddItem = () => {
  const [foodImage, setFoodImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoodImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Send to backend here
    alert("Food item added!");
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="mb-4 text-primary">🍽️ Add New Food Item</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Food Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="e.g. Margherita Pizza"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="e.g. 299"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            placeholder="Write something tasty..."
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          {foodImage && (
            <div className="mt-3 text-center">
              <img
                src={foodImage}
                alt="Preview"
                style={{ maxWidth: "300px", borderRadius: "12px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              />
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          ➕ Add Item
        </Button>
      </Form>
    </Card>
  );
};

export default AddItem;
