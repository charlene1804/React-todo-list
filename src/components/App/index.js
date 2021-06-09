// == Import npm
import React from 'react';

// == Import composants
import Input from 'src/components/Input';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
// == Data
import tasks from 'src/data/tasks';
// == Style
import './app.scss';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfTasks: tasks,
    };
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(value) {
    const tasksInState = this.state.listOfTasks;
    const IDs = this.state.listOfTasks.map((task)=> task.id);
    console.log(IDs);
    const highestID = Math.max(...IDs);
    console.log(highestID);
    const newTask = {
      id: highestID + 1,
      label: value,
      done: false,
    };
    this.setState({ listOfTasks: tasksInState.concat(newTask)});
  }

  computeCounter() {
    // on veut calculer le nombre de tâches encore à effectuer
    // on va filter selon que la propriété done est false
    const ongoingTasksNb = this.state.listOfTasks.filter((task) => task.done === false).length;

    // en fonction du nombre de tâches on modifie le texte du compteur
    if (ongoingTasksNb === 0) {
      return 'Aucune tâche en cours';
    }
    if (ongoingTasksNb === 1) {
      return 'Une tâche en cours';
    }
    return `${ongoingTasksNb} tâches en cours`;
  }

  render() {
    return (
      <div className="app">
        <Input onNewTask={this.addNewTask} />
        <Counter text={this.computeCounter()} />
        <List listOfTasks={this.state.listOfTasks} />
      </div>
    );
  }
}

// == Export
export default App;
