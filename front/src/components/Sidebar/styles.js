import styled from 'styled-components';

export const Container = styled.div`

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
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

  .sidebar-toggle {
    position: absolute;
    top: 0;
    right: -40px;
    font-size: 24px;
    color: #333;
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
    color: #333;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #f2f2f2;
  }

  a svg {
    margin-right: 10px;
  }

`;

export default Container;
