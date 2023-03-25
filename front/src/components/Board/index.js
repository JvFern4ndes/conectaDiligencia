import React from 'react';

import { useBoard } from './context';

import List from '../List';

import { Container } from './styles';

export default function Board() {
  const { lists } = useBoard();

  return (
    <Container>
      {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
    </Container>
  );
}
