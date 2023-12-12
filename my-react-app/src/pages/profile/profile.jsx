import "./profile.css";
import React, { useState } from "react";
import Modal from "react-modal";

export function Profile() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Update user"s information
    setModalIsOpen(false);
  };
  
  return (
    <div>
      <section className="settings-tab">
        <h3>
          <button onClick={() => setModalIsOpen(true)}>Settings</button>
        </h3>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              width: "50vw",
              height: "50vh",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
            },
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)'}
            }}
            >
          <form className="setting-box" onSubmit={handleSubmit}>
          {/* <button className="close-button" onClick={() => setModalIsOpen(false)}>X</button> */}
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button className="update-btn" type="submit">Update</button>
            {/* ... other fields */}
          </form>
        </Modal>
      </section>
      <h2>Your Profile</h2>
      <section>
        <h3>User Information</h3>
        <img src="https://via.placeholder.com/150" alt="User Avatar" />
        <p>Change info?</p>
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