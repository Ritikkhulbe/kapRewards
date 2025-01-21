import { useLocation } from "react-router-dom";
import earbuds from "../assets/ImageFolder/earbuds.jpg";
import mouse from "../assets/ImageFolder/mouse.jpg";
import phone from "../assets/ImageFolder/phone.jpg";
import tablet from "../assets/ImageFolder/tablet.jpg";
import tracker from "../assets/ImageFolder/tracker.jpg";
import watch from "../assets/ImageFolder/watch.jpg";

interface Product {
  name: string;
  points: number;
  image: string;
}

const OrderPage = () => {
  const location = useLocation();
  const { state } = location;
  const selectedProduct = state as Product;

  const sampleProducts: Product[] = [
  const sampleProducts: Product[] = [
    {
      name: "Wireless Headphones",
      image: earbuds,
      points: 500,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      name: "Smart Watch",
      image: watch,
      points: 1000,
      rating: 4.7,
      description: "Track your fitness and stay connected with this smart watch.",
    },
    {
      name: "Gaming Mouse",
      image: mouse,
      points: 300,
      rating: 4.4,
      description: "Ergonomic gaming mouse with customizable buttons.",
    },
    {
      name: "Phone",
      image: phone,
      points: 600,
      rating: 4.6,
      description: "Sleek and powerful smartphone with amazing camera quality.",
    },
    {
      name: "Tablet",
      image: tablet,
      points: 3000,
      rating: 4.8,
      description: "High-resolution tablet, perfect for work and play.",
    },
    {
      name: "Tracker",
      image: tracker,
      points: 900,
      rating: 4.3,
      description: "Keep track of your daily activity with this fitness tracker.",
    },
  ];

  const handleEmail = () => {
    const subject = `Order Request for ${selectedProduct.name}`;
    const body =
      `Dear Finance Team,\n\n` +
      `I would like to place an order for the following product:\n\n` +
      `Product Name: ${selectedProduct.name}\n` +
      `Points Required: ${selectedProduct.points}\n\n` +
      `Please let me know if any further details are needed.\n\nThank you!`;
    window.location.href = `mailto:finance@company.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        fontFamily: "'Roboto', Arial, sans-serif",
        gap: "30px",
        padding: "40px",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "20px",
            color: "#2c7be5",
            borderBottom: "3px solid #2c7be5",
            paddingBottom: "5px",
          }}
        >
          Available Products
        </h2>
        <div style={{ display: "grid", gap: "20px" }}>
          {sampleProducts.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              />
              <div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {product.name}
                </p>
                <p style={{ margin: "0", fontSize: "0.9rem", color: "#666" }}>
                  Points: {product.points}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <header
          style={{
            backgroundColor: "#2c7be5",
            color: "white",
            padding: "20px",
            textAlign: "center",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Order Product</h1>
        </header>

        <div
          style={{
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <h2
            style={{
              marginBottom: "10px",
              fontSize: "1.8rem",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            {selectedProduct.name}
          </h2>
          <p style={{ margin: "10px 0", fontSize: "1.2rem", color: "#666" }}>
            Points Required: {selectedProduct.points}
          </p>
          <p
            style={{
              margin: "20px 0",
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            {selectedProduct.description}
          </p>
          <button
            onClick={handleEmail}
            style={{
              backgroundColor: "#2c7be5",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "25px",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#255bb4")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#2c7be5")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.98)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Place Order
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
