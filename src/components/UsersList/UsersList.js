import styles from './UsersList.module.css';
import User from './User';

const UsersList = props => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) =>(<User key={user.id} username={user.username} age={user.age} />))}
      </ul>
    </div>
  );
}

export default UsersList;