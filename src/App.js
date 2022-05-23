import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
constructor() {
super();
this.state = {
msg: "Welcome to React"
};
this.updateSetState = this.updateSetState.bind(this);
}
updateSetState() {
this.setState({
msg:"React the best"
});
}
render() {
  return (
  <div>
  <h1>{this.state.msg}</h1>
  <button onClick = {this.updateSetState}>Change the state</button>
  </div>
  );
  }
  }
  export default App;