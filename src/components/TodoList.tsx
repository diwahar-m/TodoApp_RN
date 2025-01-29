import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'
import TodoItem from './TodoItem'
import { Todo } from '../types'


interface TodoListProps {
  todoList: Todo[]
  onDeleteTodo: (id: string)=> void
  onToggleTodo: (id: string)=> void
  onEditTodo: (id: string, newTxt: string)=> void
}
 const TodoList: React.FC<TodoListProps>=({
  todoList
  ,onDeleteTodo
  , onToggleTodo
  , onEditTodo
})=> {
 
    return (
      <ScrollView style={styles.container}> 
      {
        todoList?.map(todo => 
          <TodoItem 
            key={todo?.id} 
            onDelete={()=> onDeleteTodo(todo?.id)}
            onToggle={()=> onToggleTodo(todo?.id)} 
            onEdit={(newText)=> onEditTodo(todo?.id, newText)}
            todo={todo} 
            />
        )
      }
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TodoList
