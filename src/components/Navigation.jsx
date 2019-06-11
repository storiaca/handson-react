import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin: 4px 8px;
  flex: ${props => props.grow || 1};
  > a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
`;

export default ({ isLoggedIn }) => (
  <nav>
    <NavigationList>
      <NavigationItem>
        <Link to="/">Home</Link>y
      </NavigationItem>
      {isLoggedIn && (
        <NavigationItem>
          <Link to="/add-job">Add Jobs</Link>
        </NavigationItem>
      )}
      <NavigationItem grow={3}>
        <Input type="text" placeholder="Search for Jobs" />
      </NavigationItem>
      {!isLoggedIn && (
        <NavigationItem>
          <Link to="/login">Login</Link>
        </NavigationItem>
      )}
    </NavigationList>
  </nav>
);
