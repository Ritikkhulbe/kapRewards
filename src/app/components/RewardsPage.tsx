
import React from 'react';

interface EmployeeProps {
  name: string;
  rewardPoints: number;
}

const RewardsPage: React.FC<EmployeeProps> = ({ name = "Mohit", rewardPoints= "32" }) => {

    const rewards = [
    { title: 'Flight Tickets', image: './images/flights', route: 'https://www.skyscanner.co.in' },
    { title: 'Trips', image: '/images/trips.png', route: 'https://www.makemytrip.com/holidays-international/thailand-tourism.html' },
    { title: 'Gift Cards', image: '/images/gift-cards.png', route: 'https://amazon.com/gift-cards' },
    { title: 'Cash Rewards', image: '/images/cash.png', route: 'https://paytm.com/money' },
    { title: 'Shopping Vouchers', image: '/images/vouchers.png', route: 'https://www.skyscanner.co.in' },
    { title: 'Wellness Programs', image: '/images/wellness.png', route: 'https://www.skyscanner.co.in' },
    {title: 'Online Shopping', image : '' , route: 'https://amazon.com/'}
  ];

  const handleCardClick = (route: string) => {
    if (route.startsWith('http')) {
      window.open(route, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = route;
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
        }}
      >
        <h1 style={{ fontSize: '2rem', margin: '0' }}>Welcome, {name}!</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '10px 0 0' }}>You have {rewardPoints} reward points</h2>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '10px',
        }}
      >
        {rewards.map((reward) => (
          <div
            key={reward.title}
            style={{
              border: '2px solid #ddd',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onClick={() => handleCardClick(reward.route)}
            onMouseOver={(e) => {
              const element = e.currentTarget;
              element.style.transform = 'scale(1.05)';
              element.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              const element = e.currentTarget;
              element.style.transform = 'scale(1)';
              element.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={reward.image}
              alt={reward.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3 style={{ margin: '10px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>{reward.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsPage;

