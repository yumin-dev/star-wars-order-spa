import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => (
  <div>
    <div>{title}</div>
    <div>Random text displayed</div>
  </div>
);
export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
};
