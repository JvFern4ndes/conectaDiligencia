import React from 'react';
import PropTypes from 'prop-types';

import { MdArrowDownward } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List(props) {
  const { data } = props;

  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        <button type="button">
          <MdArrowDownward size={24} color="#FFF" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.string.isRequired,
};
