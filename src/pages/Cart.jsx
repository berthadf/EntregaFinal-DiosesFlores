import React from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart, getTotalPrice } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px"
    }}
    >
      <h1 style={{
        textAlign: "center"
      }}
      >
        Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{
          display: "flex",
          flexWrap: "wrap"
        }}
        >
          <div style={{
            flex: "1 1 50%",
            minWidth: "300px",
            padding: "10px"
          }}
          >
            {cart.map((item, index) => (
              <div key={index}
                style={{
                  marginBottom: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#f9f9f9"
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: S/. {item.price} (soles peruanos)</p>
                <p>Cantidad: {item.quantity}</p>
                <div style={{
                  display: "flex",
                  alignItems: "center"
                }}
                >
                  <button style={{
                    marginRight: "10px",
                    backgroundColor: "#5bbec0",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px"
                  }}
                    onClick={() => handleRemoveOne(item)}
                  > - </button>
                  <button style={{
                    backgroundColor: "#5bbec0",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                  }}
                    onClick={() => handleDeleteItem(item)}
                  > Eliminar </button>
                </div>

              </div>
            ))}
          </div>
          <div style={{
            flex: "1 1 50%",
            minWidth: "300px",
            padding: "10px",
            textAlign: "right",
          }}
          >
            {cart.map((item, index) => (
              <div key={index}
                style={{
                  margin: "10px",
                  padding: "10px",
                  textAlign: "right"
                }}
              >
                <p>Total de {item.title}: S/. {item.price * item.quantity}</p>
              </div>
            ))}
            <div style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
            }}
            >
              <h2>Total del Carrito</h2>
              <p style={{
                fontSize: "1.5rem",
                fontWeight: "bold"
              }}
              > S/. {getTotalPrice()}</p>
            </div>
            <Link to={'/checkout'} style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#5bbec0",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "1.2rem",
            }}>Pagar</Link>
          </div>
        </div>
      ) : (
        <p style={{
          textAlign: "center"
        }}
        >Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;