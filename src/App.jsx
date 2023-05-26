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
                className="mt-2"
                name="breedDescription"
                cols="30"
                rows="10"
                placeholder="Breed Description..."
              ></textarea>
            </label>
            <button className="rounded-full" type="submit">
              Submit
            </button>
          </form>
        </div>

      </main>
    </>
  );
}

export default App;
