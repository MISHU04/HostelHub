import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WardenStyle.css';

const Warden = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:8000/warden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Login successful');
       
        navigate('/issues');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);

    }
  };

  return (
    <div className="main">
      <div className="wrapper">
        <div className="form-box">
          <h2>Warden Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="text" id="username" name="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-box">
              <input type="password" id="password" name="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Warden;
