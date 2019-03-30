import React from 'react';
import ReactDOM from 'react-dom';
import HorsePower from './HorsePower';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HorsePower />, div);
  ReactDOM.unmountComponentAtNode(div);
});
