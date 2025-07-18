import React, { Component } from 'react';

class NameChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John'
    };
  }

  changeName = () => {
    this.setState({ name: 'Jane' });
  };

  render() {
    return (
      <div>
        <h2>Hello, {this.state.name}</h2>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default NameChangeClass;
