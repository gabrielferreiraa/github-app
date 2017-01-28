'use strict';

import React from 'react';
import Button from './button';

const LikeButton = () => (
  <Button handleClick={() => alert('Like')}>Botão de Like</Button>
);

export default LikeButton;
