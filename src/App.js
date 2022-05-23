import React, { Component } from 'react';
class App extends React.Component {
constructor() {
super();
this.forceUpdateState = this.forceUpdateState.bind(this);
}
forceUpdateState() {
this.forceUpdate(); // actualiser le component sans actualiser la page ni relire les methodes
}; render() {
return (
<div>
<h1>Example to generate random number</h1>
<h3>Random number: {Math.random()}</h3>

<button onClick = {this.forceUpdateState}>ForceUpdate</button>
</div>
); } } export default App;