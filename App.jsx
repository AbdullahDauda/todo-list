/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './app/ToDoForm';
import ToDoList from './app/ToDoList';

function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    // Implement the logic to add a new task
    if (!taskText.trim()) return; // avoid adding empty tasks
    setTasks([...tasks, taskText.trim()]);
  };

  return (
    <SafeAreaView
      style={{
        marginTop: 50,
      }}
    >
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
