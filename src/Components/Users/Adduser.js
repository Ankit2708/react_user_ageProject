import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Adduser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props) => {

  // refs are uncontrolled because their value changes using dom not react
  const namedInputRef = useRef()
  const ageInputRef = useRef()
  const collegeInputRef = useRef()
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError]=useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = namedInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    const enteredCollege = collegeInputRef.current.value
    // using useState
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title:"Invalid name",
    //     message:"please enter valid name"
    //   })
    //   return;
    // }
    // if (+enteredAge < 1) {
    //   setError({
    //     title:"Invalid age",
    //     message:"please enter valid age"
    //   })
    //   return;
    // }

  // using useRef
  if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
    setError({
      title:"Invalid name",
      message:"please enter valid name"
    })
    return;
  }
  if (+enteredUserAge < 1) {
    setError({
      title:"Invalid age",
      message:"please enter valid age"
    })
    return;
  }

    props.onAddUser(enteredName, enteredUserAge, enteredCollege);
    namedInputRef.current.value=''
    ageInputRef.current.value=''
    collegeInputRef.current.value=''
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler =() =>{
    setError(null)
  }
  return (
    <Wrapper>
    {error && 
    <ErrorModal title={error.title} 
    message={error.message}
    onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // value={enteredUsername}
          // onChange={usernameChangeHandler}
          ref={namedInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          // value={enteredAge}
          // onChange={ageChangeHandler}
          ref={ageInputRef}
        />
        <label htmlFor="colleg">College</label>
        <input
          id="college"
          type="text"
          // value={enteredUsername}
          // onChange={usernameChangeHandler}
          ref={collegeInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;