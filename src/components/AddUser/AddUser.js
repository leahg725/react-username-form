import { useState } from 'react';
import styles from './AddUser.module.css';
import buttonStyles from '../UI/Button.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <button className={buttonStyles.button} type="submit">Add User</button>
      </div>
    </form>
  );
}

export default AddUser;