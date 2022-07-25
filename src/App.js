import './App.css';
import React, {useState} from "react";

function App() {
  const [done, setDone] = useState(false)
  const [price, setPrice] = useState('6.90') 
  const [results, setResults] = useState({})

  const handlePrice = (e) => {
      setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const dateResult = date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear()
    const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
    setResults({dateResult, time, price})
    setDone(true);

  }




  return (
    <div className="App">
      
      <div className="modal" style={{display: done ? "block" : "none"}}>
          <p id="iphoneTime">{results.time || "hello"}</p>
          <p id="date">{results.dateResult || "hello"}</p>
          <p id="time">{results.time || "hello"}</p>
          <p id="price">&#8362;{results.price || "hello"}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>price:</label>
          <input type="text" value={price} onChange={handlePrice} />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
