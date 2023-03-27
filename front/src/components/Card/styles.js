import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header {
    display: flex;
    top: -22px;
    left: 0;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  .userPhoto {
    padding: 15px;
  }

  img {
    width: 96px;
    height: 96px;
    border-radius: 48px;
    margin-top: 5px;
  }

  ${(props) => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, strong, img, header, button {
      opacity: 0;
    }
  `}
`;

export const LabelContainer = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
`;

export const Label = styled.span`
  width: 100%;
  height: 10px;
  border-radius: 2px;
  display: flex;
  background: ${(props) => props.color};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  white-space: nowrap;

  p {
    font-size: 24px;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 32px 56px;

  strong, p {
    font-size: 16px;
    white-space: nowrap;
  }

  button {
    display: flex;
    align-items: left;
    padding-top: 24px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    background-color: green;
    color: white;
    padding: 8px;
    border-radius: 32px;
    width: 64px;
    height: 64px;
  }

  button {
    background: none;
    border: none;
  }
`;
