import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail } from "../features/userSlice.js";

function App() {
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => dispatch(setName(e.target.value.trim()))}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => dispatch(setEmail(e.target.value.trim()))}
          />
        </div>
      </form>

      <div>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
      </div>
    </div>
  );
}

export default App;
