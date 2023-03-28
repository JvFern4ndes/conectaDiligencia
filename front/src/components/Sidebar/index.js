import React, { useState } from 'react';
import {
  FaHome, FaUser, FaCog, FaBars,
} from 'react-icons/fa';

import { Container } from './styles';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleToggleSidebar();
    }
  };

  return (
    <Container>
      <div
        className={`sidebar ${isOpen ? 'open' : ''}`}
        role="button"
        tabIndex="0"
        onClick={handleToggleSidebar}
        onKeyDown={handleKeyDown}
      >
        <div className="sidebar-toggle">
          <FaBars />
        </div>
        <ul>
          <li>
            <a href="/">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUser />
              Perfil
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog />
              Configurações
            </a>
          </li>
        </ul>
        <div className={`sidebar-icon-bar ${isOpen ? 'hidden' : ''}`}>
          <FaHome />
          <FaUser />
          <FaCog />
        </div>
      </div>
    </Container>
  );
}
