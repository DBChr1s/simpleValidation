import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [validationError, setValidationError] = useState("");

  const handleConfirmClick = (e) => {
    e.preventDefault();

    const errors = {};

    if (!/^[A-Za-z]{2,}$/.test(name)) {
      errors.name =
        "Please enter a name with at least 2 letters and only letters.";
    }

    if (!/^\d+$/.test(age) || age <= 18) {
      errors.age = "Please enter a valid age (above 18).";
    }

    if (!/^[A-Za-z\d]{4,}$/.test(address)) {
      errors.address =
        "Please enter an address with at least 4 letters and 1 number (letters and numbers only).";
    }

    if (!/^\d{4}$/.test(zipCode)) {
      errors.zipCode = "Please enter a 4-digit zip code.";
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Simple validation
        <br />
        <form className="Container">
          <input type="text" name="name" placeholder="name" value={name} />
          {validationErrors.name && (
            <p className="error">{validationErrors.name}</p>
          )}
          <input type="number" name="age" placeholder="age" value={age} />
          {validationErrors.age && (
            <p className="error">{validationErrors.age}</p>
          )}
          <input
            type="text"
            name="address"
            placeholder="address"
            value={address}
          />
          {validationErrors.address && (
            <p className="error">{validationErrors.address}</p>
          )}
          <input
            type="text"
            name="zipCode"
            placeholder="zip code"
            value={zipCode}
          />
          {validationErrors.zipCode && (
            <p className="error">{validationErrors.zipCode}</p>
          )}
          <input type="email" name="email" placeholder="email" value={email} />
          {validationErrors.email && (
            <p className="error">{validationErrors.email}</p>
          )}
        </form>
        {validationError && <p className="error">{validationError}</p>}
        <button className="confirm" onClick={handleConfirmClick}>
          Confirm
        </button>
      </header>
    </div>
  );
}

export default App;
