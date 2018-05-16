import React from 'react';
import ReactDOM from 'react-dom';
import Headi from './header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Headi />, div);
  ReactDOM.unmountComponentAtNode(div);
});