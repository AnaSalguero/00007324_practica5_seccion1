import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getImageURL } from './utils.js';

function Avatar({person, size}) {
  return (
    <img
      className="avatar"
      src={getImageURL(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}



function MyButton(props) {
  return (
    <button onClick={props.Fn}>Soy un botón custom y mi cuenta es: {props.count}</button>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton count={count} Fn={increment} />
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: '0KS67lh',
        }}
      />
      <Avatar
        size={100}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
      />
    </div>
  );
}