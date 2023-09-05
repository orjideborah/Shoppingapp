// src/components/LogoHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

function LogoHeader() {
  return (
    <header className="logo-header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          That Naija Brand
        </Link>
      </nav>
    </header>
  );
}

export default LogoHeader;
