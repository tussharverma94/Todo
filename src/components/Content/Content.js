import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddTodo from '../addTodo/addTodo';
import Edit from '../Edit/Edit';
import ShowTodo from '../showTodo/showTodo'
import config from '../../../private';
// import styles from './Content.module.css';

const Content = () => {
  // var inittask = [
  //   {
  //     id : 1,
  //     heading : "Walking",
  //     comment : "I link to walk"
  //   },
  //   {
  //     id : 2,
  //     heading : "Running",
  //     comment : "I link to run"
  //   },
  //   {
  //     id : 3,
  //     heading : "Jumping",
  //     comment : "I link to jump"
  //   }]

  const [task, setTask] = useState([]);

  useEffect(() => {
    // console.log("use effect called");
    let url = config();
    axios.get(url)
    // axios.get('task.json')
    .then(result => {
      // console.log(result.data.data);
      setTask(result.data.data)
    })
  }, []);

  const EditTask = (val) => {
    task.forEach((Element) => {
      if(Element.id === val.id){
        Element.heading = val.heading;
        Element.comment = val.comment;
      }
    })
  }
  const addTask = (val) => {
    let id = 0;
    if(task.length > 0){
      id = task[task.length - 1].id + 1;
    }
    val.id = id;
    return setTask(task => {return [...task, val]});
  }
  const handleDelete = (id) => {
    return setTask(task => {return task.filter(e => e.id !== id)});
  }

  return (
  <div style={{margin:30}}>
    {task.length <= 0 ? <div> Loading... </div> :
    <ShowTodo task={task} OnDelete={handleDelete} EditTask={EditTask}></ShowTodo>
    }
    <AddTodo addTask={addTask}></AddTodo>
  </div>
)};
export default Content;
