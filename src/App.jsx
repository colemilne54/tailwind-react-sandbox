import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h3>This</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
    </>
  )
}

export default App
