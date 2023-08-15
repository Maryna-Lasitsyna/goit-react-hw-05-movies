import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  cursor: pointer;
  border-radius: 4px;
  /* border: 3px solid #484d49; */
  border: none;
  font-size: 18px;
  outline: none;
  margin-right: 10px;

  &:hover {
    color: grey;
    border: grey;
  }
`;

export const Button = styled.button`
  padding: 12px 14px;
  cursor: pointer;
  border-radius: 4px;
  /* border: 3px solid #484d49; */
  border: none;
  font-size: 18px;
  font-weight: 600;
  outline: none;

  &:hover {
    color: #0b3b18;
    border: #0b3b18;
    background-color: #c7c7d4;
  }
`;
