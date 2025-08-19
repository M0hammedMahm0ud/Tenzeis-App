import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import styles from "./styles.module.css";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const rem = dice.filter((el) => el.isHeld === true);
  console.log(rem);
  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <div className={styles.parentDiv}>
      <main>
        {gameWon && <Confetti />}
        <div aria-live="polite">
          {gameWon && (
            <p className={styles.congrate}>
              Congratulations! You won! Press "New Game" to start again.
            </p>
          )}
        </div>
        <p className={styles.pargraph}>Tenzies</p>
        <p className={styles.pp}>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button ref={buttonRef} className={styles.btn} onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
        <p>Remaining Dices : {10 - rem.length}</p>
      </main>
    </div>
  );
}
