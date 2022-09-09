import React, { useState } from 'react';
import Edit from '../Edit/Edit';
import styles from './showTodo.module.css';

const ShowTodo = (props) => {
  
  const [detail, setDetail] = useState({id : null, value : false});
  const [showEdit, setshowEdit] = useState({id : null, value : false});
  const [showEditButton, setshowEditButton] = useState({id : null, value : true})
  const handleMoseEnter = (id) => {
    setDetail({id : id, value : true});
  }
  const handleMoseLeave = (id) => {
    setDetail({id : id, value : false});
  }
  const handleshowEditContent = (id) => {
    setshowEdit({id : id, value : true});
    handleHideEditbutton(id);
  }
  const handleHideEditbutton = (id) =>{
    setshowEditButton({id : id, value : false});
  }
  const handleShowEditbutton = (id) =>{
    setshowEditButton({id : id, value : true});
  }
  const handlehideEdit = (id) => {
    setshowEdit({id : id, value : false});
    handleShowEditbutton(id);
  }

  const showTask = (props) => {
    const handleDelete = (id) => {
      props.OnDelete(id);
    }

    return props.task
    .map(
      item => (
      <li key={item.id} className={styles.li} onMouseEnter={() => {return handleMoseEnter(item.id)}} onMouseLeave={()=>(handleMoseLeave(item.id))}>
        <h5 className='card-subtitle' >{item.heading}</h5><br />
        { (detail.id === item.id && detail.value) ? 
          <div className='row'>
            <div className='col-sm-4'>
              {/* <div className='card'> */}
                <p className='card-text'>{item.comment}</p> 
              {/* </div> */}
            </div>
            <div className='col-sm-4'>
              <>
                {
                //  showEditButton.value?
                true ?
                <div className='card'>
                  <button type='button' className='btn btn-primary' onClick={() => handleshowEditContent(item.id)}>Edit</button>
                </div>
                : <></>
                }
              </>
              <div >{(showEdit.id === item.id && showEdit.value) ? <Edit handlehideEdit={handlehideEdit} EditTask={props.EditTask} id={item.id}></Edit> : <></> }</div>
            </div>
            <div className='col-sm-4'>
              <div className='card'>
                <button type='button' className='btn btn-danger' onClick={ ()=> handleDelete(item.id)} >Delete</button>
              </div>
              {/* <Edit></Edit> */}
            </div>
          </div>
        :
          <div></div>}
      </li>
      ))
  }

  
  return (
  <div className='card-body' style={{margin:20}}>
    <h2 className='card-title'>Working  List </h2>
    <ul className={styles.ul}> 
    {showTask(props)}
    </ul>
  </div>
)};

export default ShowTodo;
