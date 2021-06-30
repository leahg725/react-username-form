import {useState, React, Fragment} from 'react';
import Card from './components/UI/Card';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [isValidAge, setIsValidAge] = useState(false);
  
  const hideModal = () => {
    setIsValid(true);
  }
  const addUserHandler = (enteredUser) => {
    if(enteredUser.username && (enteredUser.age !== 0 && enteredUser.age > 0)) {
      setUsers(prevUsers => {
        return [enteredUser, ...prevUsers];
      });
      setIsValid(true);
      setIsValidAge(true);
    } else if((enteredUser.username && enteredUser.age < 0) || (enteredUser.username === '' && enteredUser.age < 0)) {
      setIsValid(false);
      setIsValidAge(false);
    } else {
      setIsValid(false);
      setIsValidAge(true);
    }
  }

  return (
    <Fragment>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      {users.length === 0 ? '' : <Card><UsersList users={users} /></Card> }
      {!isValid ? <ErrorModal onCancel={hideModal} age={isValidAge} /> : ''}
    </Fragment>
  );
}

export default App;
