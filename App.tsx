import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { Todo } from './src/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (text: string)=> {
    console.log(text)
    setTodoList([...todoList, {
      id: Date.now().toString(),
      text,
      completed: false,
    }])
  }

  const deleteTodo = (id: string) => {
    setTodoList(todoList?.filter(todo => todo?.id !== id))
  }

  const toggleTodo =(id: string) => {
    setTodoList(todoList?.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const editTodo = (id: string, newTxt: string)=> {
    setTodoList(todoList?.map(todo => todo?.id === id ? {...todo, text: newTxt} : todo))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput  onAddTodo={addTodo}/>
      <TodoList 
        todoList={
          todoList
        }
        onDeleteTodo={deleteTodo}
        onToggleTodo ={toggleTodo}
        onEditTodo = {editTodo}
       />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1, 
  padding: 20,
 }, 
 headerText: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center'
 }
});

export default App;
