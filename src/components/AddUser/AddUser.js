import { useRef } from 'react';
import styles from './AddUser.module.css';
import buttonStyles from '../UI/Button.module.css';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = event => {
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault();
    const userData = {
      username: enteredName,
      age: +enteredUserAge,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" ref={ageInputRef} />
        </div>
        <button className={buttonStyles.button} type="submit">Add User</button>
      </div>
    </form>
  );
}

export default AddUser;