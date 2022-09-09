import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!username.trim().length || !age.trim().length) {
      setErrorMessage('Username or age field cannot be empty');
      return;
    }
    if (+age <= 0) {
      setErrorMessage('Age should be more than 0');
      return;
    }
    props.onAddUser({ name: username, age });
    setUsername('');
    setAge('');
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const modalCloseHandler = () => {
    setErrorMessage(null);
  };

  return (
    <Wrapper>
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
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
