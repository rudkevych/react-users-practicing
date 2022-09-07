import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const defaultUsersList = [
  {
    name: 'Oksana',
    age: '24',
    id: 1,
  },
];

function App() {
  const [users, setUsers] = useState(defaultUsersList);
  return (
    <div className='App'>
      <AddUser />=
      <UsersList users={users} />
    </div>
  );
}

export default App;
