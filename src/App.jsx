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
      <main>
        <p className={styles.pargraph}>Tenzies App</p>
        <p className={styles.pp}>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {diceArray.map((value, index) => (
            <Die value={value} key={index} />
          ))}
        </div>
        <button
          className={styles.btn}
          onClick={() => setDiceArray(() => generateAllNewDice())}
        >
          Roll new Dice
        </button>
      </main>
    </div>
  );
}
