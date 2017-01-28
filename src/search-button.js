'use strict';

import React from 'react';
import Button from './button';

const SearchButton = () => (
  <Button handleClick={() => alert('Search')}>Botão de Busca</Button>
);

export default SearchButton;
