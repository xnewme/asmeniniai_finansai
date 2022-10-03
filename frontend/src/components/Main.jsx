
import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
const Main = () => {
  const [searchValue, setSearch] = useState('');
  const [regionValue, setRegion] = useState('');

  const setSearchValue = (val) => {
    setSearch('');
    setSearch(val);
  };
  const settSearchValue = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <Header/>
      <Menu/>
    </div>
  );
};

export default Main;