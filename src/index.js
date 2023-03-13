import React from 'react';
import ReactDom from 'react-dom/client';
import './style.css';

function Header(props) {
  const clock = Date().toLocaleString();
  return (
    <h1 className="orange">
      Hello {props.name} {clock} 
    </h1>
  );
}

function Page() {
  const name = 'John';
  return (
    <>
      <Header name={} />
      <p>Hey</p>
      <p>Hi</p>
    </>
  );
}

const rootEl = document.querySelector('#root');
const root = ReactDom.createRoot(rootEl);

setInterval(function () {
  root.render(<Page />);
}, 1000);
