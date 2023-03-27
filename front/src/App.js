import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyles from './styles/globalStyles';

import Header from './components/Header';
import Board from './components/Board';
import BoardContext from './components/Board/context';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Sidebar />
      <Header />
      <BoardContext>
        <Board />
      </BoardContext>

      <GlobalStyles />
    </DndProvider>
  );
}

export default App;
