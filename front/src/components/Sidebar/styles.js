import styled from 'styled-components';

export const Container = styled.div`

  .sidebar {
    position: fixed;
    top: 0;
    left: 60px;
    bottom: 0;
    width: 250px;
    background-color: #4285f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
  }

  .sidebar.open {
    transform: translateX(0%);
  }

  .sidebar-closed {
    transform: translateX(-100%);
  }

  .sidebar-toggle {
    position: absolute;
    padding: 8px;
    right: -40px;
    font-size: 24px;
    color: #f2f2f2;
    background: #4285f4;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 20px 0;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    display: flex;
    align-items: center;
    color: #f2f2f2;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #333;
  }

  a svg {
    margin-right: 10px;
  }

  .sidebar-icons {
    display: flex;
    flex-direction: column;
  }

  .sidebar-icon-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    height: 100vh;
    background-color: #4285f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  .sidebar-icon-bar.hidden {
    display: none;
  }
`;

export default Container;
