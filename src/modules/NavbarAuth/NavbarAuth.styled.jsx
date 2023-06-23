import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color:  black;
   
  font-weight: 500;

  &.active {
    font-weight: 700;
    color: #777;
    
  }
`;
