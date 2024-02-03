import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #848484;
  }
`;
