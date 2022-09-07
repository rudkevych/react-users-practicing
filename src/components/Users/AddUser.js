import Card from '../UI/Card';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <Card></Card>
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
