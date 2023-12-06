import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">SHOP</Link>
        <Link to="/cart">
          <ShoppingCart size={30} />
        </Link>
        <Link to="/login">Login or Sign up</Link>
      </div>
    </div>
  );
};