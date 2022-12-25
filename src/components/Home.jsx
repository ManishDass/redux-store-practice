import React,{useState} from 'react'
import reactLogo from '../../src/assets/react.svg'
import Products from './Products'

const Home = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <div style={{marginTop: '100px'}}>
        <h2 className='dark'>Welcome To React Store</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='dark'>Vite + React</h1>
      <div className="card" style={{marginBottom: '80px'}}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
    </div>
  )
}

export default Home