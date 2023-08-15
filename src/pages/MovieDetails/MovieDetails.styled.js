import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap:24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
`;


export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #0b0a24;

  &:hover {
    color: #292757;
  }
`;

export const Button = styled.button`
  padding: 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #484d49;

  &:hover {
    color: #565663;
    border: 3px solid #47474f;
    background-color: #c7c7d4;
  }
`;