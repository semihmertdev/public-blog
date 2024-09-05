import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-end space-x-4 text-white">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          {!token ? (
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout} className="hover:underline">Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
