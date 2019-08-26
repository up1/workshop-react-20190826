import React from 'react';

class Main extends React.Component {

  constructor() {
    super()
    this.count = 0
    this.task = ""

    this.state = {
      tasks : []
    }
  }

  onDone = (id) => {
    const newTasks = [...this.state.tasks];
    newTasks[id].status = !newTasks[id].status;
    this.setState({ tasks: newTasks });
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
        <Input onChangeInput={this.onChange}>Task: </Input>
        <Button handleClick={this.onAdd}>Add</Button>
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