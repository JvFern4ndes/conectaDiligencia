import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import { MdArrowDownward } from 'react-icons/md';

import { useBoard } from '../Board/context';

import Card from '../Card';

import { Container } from './styles';

export default function List(props) {
  const {
    data, index: cardIndex, index: listIndex, label,
  } = props;

  const ref = useRef();
  const { move } = useBoard();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'BOX',
    item: { type: 'LIST', cardIndex, listIndex },
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
      const targetIndex = cardIndex;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.right - targetSize.left) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedLeft = draggedOffset.x - targetSize.left;

      if (draggedIndex < targetIndex && draggedLeft < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedLeft > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex, label);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },

    drop(item) {
      if (data.cards.length === 0) {
        const newCard = {
          id: Date.now(),
          content: item.content,
        };
        const targetIndex = 0;
        move(item.listIndex, listIndex, item.index, targetIndex, label, newCard);
        item.index = targetIndex;
        item.listIndex = listIndex;
      }
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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
            label={data.label}
          />
        )) }
      </ul>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
