import React from 'react';
import ReactDOM from 'react-dom';
import SearchItems from './srch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
