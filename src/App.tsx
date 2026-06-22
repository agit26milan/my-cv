import { FC } from 'react'
import './App.css'
import { useCounter } from './hooks/useCounter'

const App: FC = () => {
  const { count, increment } = useCounter()

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
