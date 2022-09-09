import React, { useState } from 'react';
import styles from './addTodo.module.css';

function AddTodo({addTask}) {
  const [ head, sethead] = useState("");
  const [comments, setComment] = useState("");
  const [isvisible, setvisible] = useState(false);
  const [headerror, setheaderror] = useState({error : '', value : false});
  const [commenterror, setcommenterror] = useState({error : '', value : false});
  const [formValid, setformValid] = useState(false);
  const handleSubmit = (event,addTask) => {
    event.preventDefault();
    // console.log(head)
    let item = {
      heading : head,
      comment : comments
    };
    addTask(item);
    setvisible(false);
  }
  
  const checkHeading = (event) => {
    let h = event.target.value;
    if(h.length > 4){
      sethead(h);
      setheaderror({error : "", value : false});
    }else{
      setheaderror({error : "Value Must be greater than 4", value : true});
    }
    setformValid(headerror.value);
  }
  const checkComment = (event) => {
    let c = event.target.value;
    if(c.length > 4){
      setComment(c);
      setcommenterror({error : "", value : false});
    }else{
      setcommenterror({error : "Value Must be greater than 4", value : true});
    }
    setformValid( commenterror.value);
  }
  /*
  const checkVal = () => {
    if(head === ""){
      setheaderror({error : "", value : false});
    }
    if(comments === ""){
      setComment({error : "", value : false});
    }
    setformValid(headerror.value || commenterror.value);
  }
*/
  return(
    <div className={styles.AddTodo} /*onClick={checkVal}*/>
      { isvisible ? 
        <form onSubmit={event => {handleSubmit(event,addTask)} }>
          <div>
            <label> Heading </label>
              <input type="text"  className="form-control" onChange={e => checkHeading(e)}></input>
          </div>
          <span className='text-danger'>{headerror.error}</span>

          <br />

          <div>
            <lable > Comments </lable>
              <input type="text"  className="form-control"  onChange={(e)=> checkComment(e)}></input>
          </div>
          <span className='text-danger'>{commenterror.error}</span>

          <br />
          <button type='submit' disabled={formValid} className='btn btn-primary' >Submit</button>
        </form>
        : 
        <button type='button' className='btn btn-primary' onClick={()=>{setvisible(true)}}>Add Task</button>
      }
    </div>
  )
}

export default AddTodo;
