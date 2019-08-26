import React from 'react';
import './App.css';
import Hello from './Hello'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      original: "TODO"
    }
    this.setData = this.setData.bind(this)
    console.log("Called App constructor")
  }

  setData(newData) {
    console.log("Called App setData")
    this.setState({
      original: newData
    });
  }

  render() {
    console.log("Called App render")
    return (
      <div>
        <h2>>>{this.state.original}</h2>
        <Hello name={this.state.original} 
               onDataChanged={this.setData}  />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       Hello World 2
//     </div>
//   );
// }

export default App;
