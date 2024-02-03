import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: block;
  margin: 10px 0 10px 14px;
  padding: 4px 5px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 3px;
  width: 60px;
  color: black;
  height: 16px;
  text-align: center;
  font-size: 14px;

  &:hover {
    color: #848484;
  }
`;

export const Container = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 20px;
`;

export const List = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

export const AdditionalInfo = styled.div`
  border-top: 1px solid #848484;
  border-bottom: 1px solid #848484;
  padding-left: 15px;
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #848484;
  }
`;
