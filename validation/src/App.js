import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Simple validation
        <br></br>
        <div className="Container">
          <input type="name" placeholder="name"></input>
          <input type="number" placeholder="age"></input>
          <input type="Adress" placeholder="adress"></input>
          <input type="number" placeholder="zip code"></input>
          <input type="email" placeholder="email"></input>
        </div>
        <button className="confirm">Confirm</button>
      </header>
    </div>
  );
}

export default App;
