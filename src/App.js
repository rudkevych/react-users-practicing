import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const defaultUsersList = [
  {
    name: 'Oksana',
    age: '24',
    id: '1',
  },
];

function App() {
  const [users, setUsers] = useState(defaultUsersList);

  const addUserHandler = user => {
    setUsers((prev) => {
      return [...prev, {...user, id: Math.random().toString()}];
    })
  };


  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users}/>
    </>
  );
}

export default App;
