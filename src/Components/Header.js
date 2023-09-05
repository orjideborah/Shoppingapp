// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LogoHeader from './LogoHeader'; // Import the LogoHeader component
import { Link } from 'react-router-dom';

function Header({ cartItemsCount }) {
  return (
    <>
      <LogoHeader />
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/products" className="nav-link">
                New In
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Sale
              </Link>
            </li>
          <li>
            <Link to="/products" className="nav-link">
              Clothing
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Dresses
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Tops
            </Link>
          </li>
            {/* Add more navigation links for other categories */}
          </ul>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cartItemsCount}</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
