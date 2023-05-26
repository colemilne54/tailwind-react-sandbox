import { useState } from 'react';
import './index.css';
import styles from './page.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className={styles.main}>

        <div className={styles.center}>
          <h1 className="text-3xl font-bold">BreedFinderAI</h1>
          <form>
            <label className="mt-5">
              Describe your dream dog below 🐾
              <textarea
                className="mt-2 textarea txtarea"
                name="breedDescription"
                cols="30"
                rows="10"
                placeholder="Breed Description..."
              ></textarea>
            </label>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full" type="submit">
              Submit
            </button>
          </form>
        </div>

      </main>
    </>
  );
}

export default App;
