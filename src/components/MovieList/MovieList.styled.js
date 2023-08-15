import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #2c2c30;

  &:hover {
    color: #474652;
  }
`;