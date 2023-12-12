import "./profile.css";
import React, { useState } from "react";
import ProductList from "../../components/ProductList";

export function Profile() {

  const [username, setUsername] = useState("");
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  return (
    <div>
      <section className="settings-tab">
        <button onClick={() => setIsBoxOpen(!isBoxOpen)}>
          Settings
        </button>
      {isBoxOpen && <div className="box">Box content</div>}
      </section>
      <h2>Your Profile</h2>
      <section>
        <h3>User Information</h3>
        <img src="https://via.placeholder.com/150" alt="User Avatar" />
        <ProductList />
        <p>Username: </p>
        <p>password:</p>
        <p>email:</p>
        {/* User Information */}
      </section>
      <section>
        <h3>Wishlist</h3>
        {/* Wishlist */}
      </section>
      <section>
        <h3>Order History</h3>
        {/* Order History */}
      </section>
      <section>
        <h3>Payment Methods</h3>
        {/* Payment Methods */}
      </section>
    </div>
  );
};