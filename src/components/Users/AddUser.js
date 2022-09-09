import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import { useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorMessage, setErrorMessage] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (!username.trim().length || !age.trim().length) {
      setErrorMessage('Username or age field cannot be empty');
      return;
    }
    if (+age <= 0) {
      setErrorMessage('Age should be more than 0');
      return;
    }
    props.onAddUser({ name: username, age });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const modalCloseHandler = () => {
    setErrorMessage(null);
  };

  return (
    <>
      {errorMessage && (
        <ErrorModal
          title='An Error occured'
          message={errorMessage}
          onClose={modalCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
