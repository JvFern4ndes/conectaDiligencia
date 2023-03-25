import React from 'react';

import userPhoto from '../../assets/images/userPhoto.png';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#fabb05" />
      </header>
      <p>Josefino da Silva</p>
      <img src={userPhoto} alt="" />
    </Container>
  );
}
