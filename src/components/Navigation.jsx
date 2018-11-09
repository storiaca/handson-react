import React from 'react';
import styled from 'styled-components';

const NavigationList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin: 4px 8px;
  flex: ${props => props.grow || 1}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
`;

export default () => 
  <nav>
    <NavigationList>
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>Add Jobs</NavigationItem>
      <NavigationItem grow={3}>
        <Input type="text" placeholder="Search for Jobs"/>
      </NavigationItem>
      <NavigationItem>Login</NavigationItem>
    </NavigationList>
  </nav>;