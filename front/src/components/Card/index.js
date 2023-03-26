import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import { useBoard } from '../Board/context';

import userPhoto from '../../assets/images/userPhoto.png';

import { Container, Label } from './styles';

export default function Card(props) {
  const {
    data, index, listIndex,
  } = props;

  const ref = useRef();
  const { move } = useBoard();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'BOX',
    item: { type: 'CARD', index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'BOX',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((color) => <Label key={color} color={color} />)}
      </header>
      <p>{data.content}</p>
      <div className="userPhoto">{ data.user && <img src={userPhoto} alt="userPhoto" /> }</div>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  listIndex: PropTypes.node.isRequired,
};
