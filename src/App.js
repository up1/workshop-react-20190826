import React from 'react';
import './App.css';
import Hello from './Hello'

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="somkiat"/>
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
