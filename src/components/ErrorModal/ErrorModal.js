import styles from './ErrorModal.module.css';
import buttonStyles from '../UI/Button.module.css';
import Card from '../UI/Card';

const ErrorModal = props => {
  let text;
  props.age ? text = 'Please enter a valid name and age (non-empty values).' : text = 'Please enter a valid age (> 0).';
  return (
    <div>
      <Card className={`${styles.modal} card`}>
        <div className={styles.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.content}>
          <p>{text}</p>
          <div className={styles.actions}>
            <button className={buttonStyles.button} onClick={props.onCancel}>Okay</button>
          </div>
        </div>
      </Card>
      <div className={styles.backdrop} onClick={props.onCancel}></div>
    </div>
  );
}

export default ErrorModal;