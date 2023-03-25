import React from 'react';
import userPhoto from '../assets/images/userPhoto.png';

export default function loadLists() {
  return [
    {
      title: 'Demandas (5)',
      rearrange: false,
      status: 'demand',
      cards: [
        {
          id: 1,
          content: 'José da Silva',
          labels: ['#33a852'],
          user: <img src={userPhoto} alt="" />,
        },
        {
          id: 2,
          content: 'José da Silva',
          labels: ['#33a852'],
          user: {
            username: 'Jose da Silva',
            image: <img src={userPhoto} alt="" />,
          },
        },
        {
          id: 3,
          content: 'José da Silva',
          labels: ['#33a852'],
          user: <img src={userPhoto} alt="" />,
        },
        {
          id: 4,
          content: 'José da Silva',
          labels: ['#33a852'],
          user: <img src={userPhoto} alt="" />,
        },
        {
          id: 5,
          content: 'José da Silva',
          labels: ['#33a852'],
          user: <img src={userPhoto} alt="" />,
        },
      ],
    },
    {
      title: 'Propostas Enviadas (1)',
      rearrange: true,
      status: 'sent',
      cards: [
        {
          id: 6,
          content: 'José da Silva',
          labels: ['#fabb05'],
          user: <img src={userPhoto} alt="" />,
        },
      ],
    },
    {
      title: 'Em negociação (3)',
      rearrange: true,
      status: 'negotiate',
      cards: [
        {
          id: 7,
          content: 'José da Silva',
          labels: ['#e94235'],
          user: <img src={userPhoto} alt="" />,
        },
        {
          id: 8,
          content: 'José da Silva',
          labels: ['#e94235'],
          user: <img src={userPhoto} alt="" />,
        },
        {
          id: 9,
          content: 'José da Silva',
          labels: ['#e94235'],
        },
      ],
    },
    {
      title: 'Executando (3)',
      rearrange: true,
      status: 'executing',
      cards: [
        {
          id: 10,
          content: 'José da Silva',
          labels: ['#4285f4'],
        },
        {
          id: 12,
          content: 'José da Silva',
          labels: ['#4285f4'],
        },
        {
          id: 13,
          content: 'José da Silva',
          labels: ['#4285f4'],
        },
      ],
    },
  ];
}
