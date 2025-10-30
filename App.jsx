/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView} from 'react-native';
import ToDoForm from './app/ToDoForm';
import ToDoList from './app/ToDoList';


function App() {
  return (
    <SafeAreaView
      style={{
        marginTop: 50
      }}
    >
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}



export default App;
