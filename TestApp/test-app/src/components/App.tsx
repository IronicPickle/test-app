import { FormEvent, useState } from "react";
import { post } from "../utils/api";

function App() {
  const [value, setValue] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    post({ value });
  };

  return (
    <div>
      <header>
        <h2 className="white">Test .NET and React App</h2>
      </header>

      <form className="container" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
