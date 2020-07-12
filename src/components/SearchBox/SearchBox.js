import React from 'react';

const SearchBox = ({ onSearchChange, placeholder }) => {
  //El estado del searchbox no se agrega acá, si no en app, por el one way dataflow, si pusieras el estado aca no tendria forma de que cardList lo lea. Esto se llama Lifting State Up

  return (
    <input
      className='search-box'
      type='search'
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;