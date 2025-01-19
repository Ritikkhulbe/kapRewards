import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  name: string;
  image: string;
  points: number;
  rating: number;
}

const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const employeePoints = 1000; // Replace with dynamic value as needed.

  const sampleProducts: Product[] = [
    { name: 'Wireless Headphones', image: 'https://plus.unsplash.com/premium_photo-1684529265466-38a66d9e9092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', points: 500, rating: 4 },
    { name: 'Smart Watch', image: 'https://plus.unsplash.com/premium_photo-1684529265466-38a66d9e9092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', points: 1000, rating: 1 },
    { name: 'Gaming Mouse', image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Gaming+Mouse', points: 300, rating: 4 },
    { name: 'Fitness Tracker', image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Fitness+Tracker', points: 800, rating: 5 },
    { name: 'Bluetooth Speaker', image: 'https://via.placeholder.com/150/9370DB/FFFFFF?text=Bluetooth+Speaker', points: 600, rating: 4 },
    { name: 'Tablet', image: 'https://via.placeholder.com/150/48D1CC/FFFFFF?text=Tablet', points: 1500, rating: 5 },
    { name: 'Mobile', image: 'https://via.placeholder.com/150/48D1CC/FFFFFF?text=Tablet', points: 1500, rating: 4 },
  ];

  const handleCardClick = (product: Product) => {
    if (employeePoints >= product.points) {
      navigate('/qa/order', { state: product });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', color: '#333' }}>
      <header
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          marginBottom: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', margin: '0' }}>Product Rewards</h1>
        <div style={{ display: 'flex',justifyContent: 'space-around', width: '30%', alignItems: 'center' , flexDirection: 'column'}}>   
            <p style={{ fontSize: '1.5rem', margin: '0' }}>Mohit Kumar Shaw</p>
            <p style={{ fontSize: '1.5rem', margin: '0' }}>Total Points: {employeePoints}</p>
        </div>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '10px',
        }}
      >
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            style={{
              border: '2px solid #ddd',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: employeePoints >= product.points ? 'pointer' : 'not-allowed',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.3s, box-shadow 0.3s',
              filter: employeePoints >= product.points ? 'none' : 'grayscale(100%) blur(2px)',
              pointerEvents: employeePoints >= product.points ? 'auto' : 'none',
            }}
            onClick={() => handleCardClick(product)}
            onMouseOver={(e) => {
              if (employeePoints >= product.points) {
                const element = e.currentTarget;
                element.style.transform = 'scale(1.05)';
                element.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseOut={(e) => {
              if (employeePoints >= product.points) {
                const element = e.currentTarget;
                element.style.transform = 'scale(1)';
                element.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
              }
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3 style={{ margin: '10px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>{product.name}</h3>
            <p style={{ margin: '5px 0', fontSize: '1rem' }}>Points Required: {product.points}</p>
            <p style={{ margin: '5px 0', fontSize: '1rem', color: '#FFD700' }}>Rating: {'⭐'.repeat(product.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
