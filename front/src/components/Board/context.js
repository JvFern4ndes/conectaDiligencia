import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import produce from 'immer';
import loadLists from '../../services/api';

const data = loadLists();

const BoardContextProvider = createContext({});

// eslint-disable-next-line react/prop-types
export default function BoardContext({ children }) {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to, top = false) {
    setLists(produce(lists, (draft) => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);

      if (top) {
        draft[toList].cards.unshift(dragged);
      } else {
        draft[toList].cards.splice(to, 0, dragged);
      }
    }));
  }

  const contextValue = useMemo(() => ({ lists, move }), [lists]);

  return (
    <BoardContextProvider.Provider
      value={contextValue}
    >
      {children}
    </BoardContextProvider.Provider>
  );
}

export const useBoard = () => useContext(BoardContextProvider);
