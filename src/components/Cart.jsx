const Cart = ({ cart, increaseQty, decreaseQty }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>
                  Item Total: ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <hr />

          <div className="bill">
            <p>Subtotal: ₹{subtotal}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
