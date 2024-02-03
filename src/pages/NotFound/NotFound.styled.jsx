import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin-left: 15px;
`;

export const Item = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #848484;
  }
`;
