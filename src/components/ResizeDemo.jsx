import React, { Component } from 'react';

export default class ResizeDemo extends Component {
  state = { windowWidth: window.innerWidth };

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth})
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    return (
      <div>
        <p>{this.state.windowWidth}</p>
      </div>
    )
  }
}
