import { Fragment } from 'react';
import styles from './ErrorModal.module.css';
import buttonStyles from '../UI/Button.module.css';
import Card from '../UI/Card';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onCancel}></div>;
};

const Overlay = props => {
  let title;
  let text;
  props.age ? title = 'Invalid Input' : title = 'Invalid Age';
  props.age ? text = 'Please enter a valid name and age (non-empty values).' : text = 'Please enter a valid age (> 0).';
  return (
    <Card className={`${styles.modal} card`}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        <p>{text}</p>
        <div className={styles.actions}>
          <button className={buttonStyles.button} onClick={props.onCancel}>Okay</button>
        </div>
      </div>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Overlay age={props.age} onCancel={props.onCancel} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
}

export default ErrorModal;