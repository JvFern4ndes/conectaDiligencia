import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

import userPhoto from '../../assets/images/userPhoto.png';

import { Container, Label } from './styles';

export default function Card(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'BOX',
    item: { type: 'CARD' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const { data } = props;

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      { data.user && <img src={userPhoto} alt="userPhoto" /> }
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.node.isRequired,
};
