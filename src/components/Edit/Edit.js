import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Edit.module.css';

const Edit = (props) => {
  const [ head, sethead] = useState("");
  const [comments, setComment] = useState("");
  const [headerror, setheaderror] = useState({error : '', value : false});
  const [commenterror, setcommenterror] = useState({error : '', value : false});
  const [formValid, setformValid] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(head)
    let item = {
      id : props.id,
      heading : head,
      comment : comments
    };
    props.handlehideEdit(props.id);
    props.EditTask(item);
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
        <form onSubmit={event => {handleSubmit(event,props.EditTask)} }>
          <div>
            <label> Heading </label>
              <input type="text" onChange={e => checkHeading(e)}></input>
          </div>
          <span className='text-danger'>{headerror.error}</span>

          <br />

          <div>
            <lable> Comments </lable>
              <input type="text"  onChange={(e)=> checkComment(e)}></input>
          </div>
          <span className='text-danger'>{commenterror.error}</span>

          <br />
          <button type='submit' disabled={formValid} className='btn btn-primary' >Submit</button>
        </form>
    </div>
  )  
}

export default Edit;
