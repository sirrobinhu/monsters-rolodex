import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.scss';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFields] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const onSearchChange = event => {
    setSearchFields(event.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder='Search monsters...'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;