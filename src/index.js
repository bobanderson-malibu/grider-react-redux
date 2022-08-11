import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  render() {
    return (
      <div className="border red">
        <div> <h1>"Please accept the request"</h1></div>
      </div>
     );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);