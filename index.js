import App from "./react.js";

var root = ReactDOM.createRoot(document.getElementById('ReactTest'));
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(App, null),
  React.createElement(App, null),
  React.createElement(App, null),
  React.createElement(App, null)
));