import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  // Auto-redirect if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      navigate('/home');
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("GIT")
    localStorage.setItem('user', JSON.stringify(user));
    alert('User data saved!');
    navigate("/home");
  };

 return (
  <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter username"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
);

};

export default Login;
