import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  color: blue;
`;

const Paragraph = styled.p`
`;

const ButtonAttemptOne = styled.button`
  padding: 12px 44px;
  color: ${props => props.primary ? '#fff' : 'royalblue'};
  background-color: ${props => props.primary ? 'royalblue' : 'auto'};
  font-size: 17px;
  border-radius: 4px;
  border: none;
  transition: 160ms all;
  :hover {
    background-color: ${props => props.primary ? 'crimson' : 'auto'};
    color: ${props => props.primary ? '#fff' : 'crimson'};
  }
`;

const Button = styled.button`
  padding: 12px 44px;
  font-size: 17px;
  border-radius: 4px;
  border: none;
  transition: 160ms all;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: royalblue;
  color: #fff;
  :hover {
    background-color: crimson;
  }
`;

const SubtleButton = styled(Button)`
  color: royalblue;
  :hover {
    color: crimson;
  }
`;

export default () => 
  <Body>
    <Heading>
      Title
    </Heading>
    <Paragraph>
      This is a paragraph of text.
    </Paragraph>
    <PrimaryButton primary={true}>
      Sign Up
    </PrimaryButton>
    <SubtleButton>
      Learn More
    </SubtleButton>
  </Body>