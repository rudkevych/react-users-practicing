import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Card className={styles.input} >
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
