import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('Profile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});