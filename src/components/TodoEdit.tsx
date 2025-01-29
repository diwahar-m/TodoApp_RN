import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Todo } from '../types'

interface TodoEditProps {
    todo: Todo, 
    onSave: (newText: string)=> void,
    onCancel: ()=> void
}

const   TodoEdit : React.FC<TodoEditProps> =({todo, onSave, onCancel}) => {
    const [text, setText] = useState(todo?.text)


    const handleSave = () => {
        if(text.trim()){
            onSave(text)
        }
    }

  return (
    <View style={styles.container} >
      <TextInput value={text} onChangeText={setText} style={styles.input}/>
       <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.btnTxt}>Save </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.cancelBtn}>
            <Text style={styles.btnTxt}>Cancel </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    input: {
        flex: 1, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    }, 
    btnContainer: {
        flexDirection: 'row'
    }, 
    saveBtn: {
    backgroundColor: '#4cd964', 
    paddingHorizontal: 10, 
    paddingVertical:  5, 
    borderRadius: 5, 
    marginRight: 5
  }, 
  cancelBtn: {
    backgroundColor: '#ff9500', 
    paddingHorizontal: 10, 
    paddingVertical:  5, 
    borderRadius: 5,
  }, 
  btnTxt:{
    color: '#fff', 
    fontSize: 15
  }
})

export default TodoEdit