import "./profile.css";
import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import { setContext } from "@apollo/client/link/context";
import Auth from "../../utils/auth";

export function Profile() {

  const [username, setUsername] = useState("");
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  return (
    <div>
      {Auth.loggedIn() ? (<><p>Hi Logged in!</p></>) : (<><p>Logged Out!</p></>)}
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
        <button onClick={() => Auth.login(121212)}>Login</button>
        <button onClick={() => Auth.logout()}>Logout</button>
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