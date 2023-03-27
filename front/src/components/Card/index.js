import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import { FaCheck } from 'react-icons/fa';
import { useBoard } from '../Board/context';

import userPhoto from '../../assets/images/userPhoto.png';

import {
  Container,
  Label,
  UserContainer,
  LabelContainer,
  CardContent,
  InfosContainer,
  ConfirmButton,
} from './styles';

export default function Card(props) {
  const {
    data, index, listIndex, label,
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

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex, label);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <LabelContainer>
        <header>
          {data.labels.map((color) => <Label key={color} color={color} />)}
        </header>
      </LabelContainer>
      <CardContent>
        <UserContainer>
          <div className="userPhoto">{ data.user && <img src={userPhoto} alt="userPhoto" /> }</div>
          <p>{data.name}</p>
        </UserContainer>
        <InfosContainer>
          <strong>{data.time}</strong>
          <p>{data.date}</p>
          <strong>{data.local}</strong>
          <p>{data.place}</p>
          <button type="button">{data.details}</button>
        </InfosContainer>
        <ConfirmButton>
          <button type="button" aria-label="Confirmar"><FaCheck /></button>
        </ConfirmButton>
      </CardContent>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  listIndex: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
