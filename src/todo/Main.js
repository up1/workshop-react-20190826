import React from 'react';
import '../App.css'

class Main extends React.Component {

  constructor() {
    super()
    this.count = 1

    this.state = {
      tasks : [
        {
          id: 0,
          title: 'TODO',
          status: false
        }
      ]
    }
  }

  onDone = (id) => {
    const newTasks = [...this.state.tasks];
    newTasks[id].status = !newTasks[id].status;
    this.setState({ tasks: newTasks });
    console.table(newTasks);
  } 

  onChange = (newTask) => {
    this.task = newTask.target.value
  }

  onAdd = () => {
    const task = {
      id: this.count++,
      title: this.task,
      status: false
    }
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return (
      <div>
        <Input onChangeInput={this.onChange}>XXX</Input>
        <Button handleClick={this.onAdd}>Add 2</Button>
        <TaskList tasks={this.state.tasks} handleClick={this.onDone}/>
      </div>
    )
    }
}

// Input component
const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
);

// Button component
const Button = ({handleClick, children}) => {
  return(
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  )
}

// List of tasks
const TaskList = ({tasks, handleClick}) => {
  const listItems = tasks.map((task) =>
    <li key={task.id} 
        onClick={e => handleClick(task.id)} 
        className={'show'+task.status}>
      {task.title}
    </li>
  );

  return(
    <ul>
      {listItems}
    </ul>
  )
}
  
export default Main;