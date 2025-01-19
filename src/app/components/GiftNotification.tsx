// React + TypeScript version of the Gift Notification Popup
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const GiftNotification: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handlePopupClick = () => {
    // Trigger confetti animation
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Show the congratulatory message
    setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    setShowMessage(true);

    // Auto-remove the message after some time
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <>
      {showPopup && (
        <div
          id="gift-popup"
           className="heartbeat-animation"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#ffffff',
            border: '2px solid #ff9900',
            borderRadius: '10px',
            padding: '15px 25px',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: '#333',
            textAlign: 'center',
          }}
          onClick={handlePopupClick}
        >
          🎁 Click to Open Your Gift!
        </div>
      )}

      {showMessage && (
        <>
          {/* Blur the background */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 999,
            }}
          ></div>

          {/* Highlight the message */}
          <div
            id="congrats-message"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(135deg, #ffccf2, #ff33cc)',
              border: '3px solid #ffffff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              color: '#000',
              textAlign: 'center',
              zIndex: 1000,
            }}
          >
            🎉 Hurray! You have won the prize! You can now redeem it in the gift redeem section.
          </div>
        </>
      )}
    </>
  );
};

export default GiftNotification;