import { useLocation } from "react-router-dom";

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
    {
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Headphones",
      points: 500,
    },
    {
      name: "Smart Watch",
      image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=Smart+Watch",
      points: 1000,
    },
    {
      name: "Gaming Mouse",
      image: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Gaming+Mouse",
      points: 300,
    },
    {
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Headphones",
      points: 500,
    },
    {
      name: "Smart Watch",
      image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=Smart+Watch",
      points: 1000,
    },
    {
      name: "Gaming Mouse",
      image: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Gaming+Mouse",
      points: 300,
    },
  ]; // Add more sample products here

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
        display: "flex",
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        color: "#333",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: "30%",
          borderRight: "1px solid #ddd",
          padding: "20px",
          overflowY: "auto",
          boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#4caf50" }}
        >
          Available Products
        </h2>
        <div style={{ display: "grid", gap: "10px" }}>
          {sampleProducts.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginRight: "10px",
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
      <div style={{ width: "70%", padding: "20px" }}>
        <header
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "20px",
            textAlign: "center",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Order Product</h1>
        </header>

        <div
          style={{
            textAlign: "center",
            border: "2px solid #ddd",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          />
          <h2
            style={{ marginBottom: "10px", fontSize: "1.5rem", color: "#333" }}
          >
            {selectedProduct.name}
          </h2>
          <p style={{ margin: "5px 0", fontSize: "1.2rem", color: "#666" }}>
            Points Required: {selectedProduct.points}
          </p>
          <button
            onClick={handleEmail}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "20px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4caf50")
            }
          >
            Send Email to Finance Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
