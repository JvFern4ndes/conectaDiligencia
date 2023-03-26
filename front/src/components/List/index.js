import React from 'react';
import PropTypes from 'prop-types';

import { MdArrowDownward } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List(props) {
  const {
    data, index: listIndex,
  } = props;

  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        {data.rearrange && (
          <button type="button">
            <MdArrowDownward size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        { data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        )) }
      </ul>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};
