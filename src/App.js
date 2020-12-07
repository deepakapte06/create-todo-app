import React, {useState,useEffect} from 'react';

import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'
function App() {
  //  const [todos, setTodos] = useState(['Shaurya is a good boy!','Shauya Study!','Avni is sleeping!']); //fill from firebase database
 
  const [todos, setTodos] = useState([]); 
  const[input,setInput] = useState(['']);

  //connect to db to get values for todo
  useEffect(() => {
    //this code fires when the app loads and never again. // db connection can happen here.
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    // console.log(snapshot.docs.map(doc =>doc.data()))
     setTodos(snapshot.docs.map(doc =>doc.data().todo))
   })
  }, [])

  const addTodo = (event) =>{
    //this fires when we click the button
    event.preventDefault()
    
    //updating the database timestamp take from the server time of the data 🚀
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos,input]) //append to the end of the error
    setInput(''); //clear up the input
  }
  return (
    <div className="App">
     <h1>Hello Shaurya! {1+1} </h1>
     <form>


     <FormControl>
         <InputLabel >Write a Todo</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

    <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>

    <ul>
      {todos.map(todo => (
<Todo text={todo}></Todo>
      ))}
    </ul>
    </form>
    </div>
  );
}

export default App;
