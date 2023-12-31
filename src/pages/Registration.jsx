import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigte = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        username: username,
        password: password,
        email: email,
      };

      const addedUser = await register(newUser);

      console.log('Registration successful:', addedUser);
      navigte('/login');
    } catch (error) {
      console.log('Registration error', error);

      setError('Registration error', error);
    }
  };

  return (
    <Container className=" w-50 mt-5">
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit" variant="primary" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
