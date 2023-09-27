import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  return (
    <div className="box">
      <div className="container">
        <h1>Christmas wish list</h1>
        <h2>You have {gifts.length} items</h2>
      </div>
      {gifts.map((element) => {
        const { id, gift, image } = element;

        return (
          <div key={id}>
            <div className="container">
              <h3>
                {id} - {gift}
              </h3>
            </div>

            <div className="container">
              <img src={image} width="300px" height="350px" alt={gift} />
            </div>

            <div className="container">
              <button onClick={() => removeGift(id)}>remove</button>
            </div>
          </div>
        );
      })}
      <div className="delete">
        <button onClick={() => setGifts([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
