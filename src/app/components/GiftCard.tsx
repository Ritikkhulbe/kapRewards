// GiftCardPage.tsx
import React, { useState } from "react";
import giftRewardsImage from '../assets/ImageFolder/gift_reward.png';
import { number } from "echarts";

// Props type
interface GiftCardPageProps {
  points: number; // User's current points passed via props
}

// Utility function to generate a 20-digit unique code
const generateUniqueCode = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 20; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

// Component
const GiftCardPage: React.FC<GiftCardPageProps> = () => {
    const [voucherCode, setVoucherCode] = useState<string | null>(null);
    const [points, setPoints] = useState<number>(1500);
  // Gift Card Options
  const giftCards = [
    { value: 100, label: "Gift Card $100", image: giftRewardsImage },
    { value: 250, label: "Gift Card $250", image: giftRewardsImage },
    { value: 500, label: "Gift Card $500", image: giftRewardsImage },
    { value: 1000, label: "Gift Card $1000", image:giftRewardsImage  },
  ];

  const handleRedeem = (value: number) => {
    const uniqueCode = generateUniqueCode();
     // Generate unique code
     setPoints(points - value ); // Deduct points from the user's total 
    setVoucherCode(uniqueCode); // Set the voucher code to display in the modal
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-100 to-white min-h-screen font-sans relative">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">Redeem Your Rewards</h1>
      <p className="text-lg text-gray-700 mb-6">
        You have <span className="text-blue-600 font-bold">{points}</span> points available.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {giftCards.map((card) => (
          <div
            key={card.value}    
            className={`p-4 border rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-white hover:shadow-2xl flex flex-col items-center {
              points < card.value ? "opacity-50" : ""
            }`}
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {card.label}
            </h2>
            <button
              onClick={() => handleRedeem(card.value)}
              disabled={points < card.value}
              className={`px-4 py-2 mt-auto rounded-full text-sm font-medium ${
                points < card.value
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
      {voucherCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-xl font-bold mb-4 text-blue-700">🎉 Congratulations!</h2>
            <p className="text-gray-700 mb-4">Your Voucher Code is:</p>
            <p
              className="text-2xl font-mono bg-gray-100 p-2 rounded text-blue-800 cursor-pointer select-all"
              title="Click to copy"
              onClick={() => navigator.clipboard.writeText(voucherCode)}
            >
              {voucherCode}
            </p>
            <button
              onClick={() => setVoucherCode(null)}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCardPage;
