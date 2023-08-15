import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
  background-color: #9ab39e;
  box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 24px;
  color: #191d1e;

  &.active {
    background-color: #555;
    color: #fff;
  }
`;
