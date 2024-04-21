import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from './users';

function App() {
  const [query, setQuery] = useState('');
  const [filteredUser, setFilteredUser] = useState([]);

  const searchHandle = (event) => {
    if (event.key === 'Enter') {
      const filtered = Users.filter((user) =>
        user.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.last_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(query.toLocaleLowerCase())

      );
      setFilteredUser(filtered);
    } else {
      setQuery(event.target.value);
      setFilteredUser(Users);
    }
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={searchHandle}
      />
      {/* <ul className="list">
       {filteredUser.length > 0 ? (
        filteredUser.map((user) => (
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))
       ) : query.length === 0 ? (Users.map((user) => (
        <li key={user.id} className="listItem">{user.first_name}</li>
       ))
       ) : <li><h3>No Resoult Found!</h3></li>}
      </ul> */}
      {query.length === 0 && <Table data={Users} />}
      {query.length > 0 && (<Table data={filteredUser} />)}
      {query.length > 0 && filteredUser.length === 0 && (<h3>No Resoult Found!</h3>)}
    </div>
  );
}

export default App;
