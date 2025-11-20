const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement('div', null, children),
  Link: ({ children }) => React.createElement('a', null, children),
  Routes: ({ children }) => React.createElement('div', null, children),
  Route: () => null,
};
