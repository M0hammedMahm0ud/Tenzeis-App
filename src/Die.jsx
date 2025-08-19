export default function Die(props) {
  return (
    <button
      onClick={() =>
        props.setIsClicked((prev) => [...prev, { id: props.id, clicked: true }])
      }
    >
      {props.value}
    </button>
  );
}
