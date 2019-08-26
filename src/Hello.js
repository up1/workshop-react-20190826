import React from 'react';

class Hello extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          name: this.props.name
      }
      console.log("Called Hello constructor")
      this.xxx = this.change.bind(this)
  }

  change(e) {
      console.log("Called Hello change with "+ e.target.value)
      this.setState({
          name: e.target.value
      })
      this.props.onDataChanged(e.target.value)
  }

  render() {
    console.log("Called Hello render")
    return (
      <div>
        <input type="text" name={this.state.name} onKeyUp={this.xxx} />
        <br/>
        <h2>Hello >> {this.state.name}</h2>
      </div>
    );
  }
}

export default Hello;