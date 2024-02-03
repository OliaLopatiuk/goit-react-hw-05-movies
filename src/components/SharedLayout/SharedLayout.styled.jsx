import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 15px;
  font-weight: bold;

  &.active {
    color: white;
  }
`;

export const Navigation = styled.nav`
  display: block;
`;

export const StyledHeader = styled.header`
  background-color: #ababab;
  margin-top: 0;
  padding: 15px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;
