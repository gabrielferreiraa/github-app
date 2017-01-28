'use strict';

import React, { PropTypes } from 'react';

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      id='input'
      placeholder='Digite o nome do usuario no GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled} />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Search;
