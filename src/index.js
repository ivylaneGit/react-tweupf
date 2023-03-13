import React from 'react';
import ReactDom from 'react-dom/client';
import './style.css';

/*function Header() {
  const clock = Date().toLocaleString();
  return <h1 className="orange">Hello {clock} </h1>;
}*/

function Page() {
  const clock = Date().toLocaleString();
  return (
    <>
      <h1>Hello {clock} </h1>
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
