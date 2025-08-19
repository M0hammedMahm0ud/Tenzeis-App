import { useState } from "react";
import Die from "./Die";
import styles from "./styles.module.css";
export default function App() {
  const [diceArray, setDiceArray] = useState(() => generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  return (
    <div className={styles.parentDiv}>
      <p className={styles.pargraph}>Tenzies App</p>
      <main>
        <div className="dice-container">
          {diceArray.map((value, index) => (
            <Die value={value} key={index} />
          ))}
        </div>
      </main>
      <button
        className={styles.btn}
        onClick={() => setDiceArray(() => generateAllNewDice())}
      >
        Roll new Dice
      </button>
    </div>
  );
}
