import { useState } from "react";

function App() {
  const [wish, setWish] = useState("");
  const hasWish = wish.length > 0;
  const [wishSubmitted, setWishSubmitted] = useState(false);

  return !wishSubmitted ? (
    <article>
      <h1>Make a wish</h1>
      <input
        type="text"
        aria-label="wish input"
        placeholder="enter your wish"
        onChange={(e) => {
          setWish(e.target.value);
        }}
      />
      <button disabled={!hasWish} onClick={() => setWishSubmitted(true)}>
        Submit wish
      </button>
    </article>
  ) : (
    <article>
      <h1>Your wish is</h1>
      <p>{wish}</p>
    </article>
  );
}

export default App;
