import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;

  background: #232129;
  color: #666350;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666350;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
