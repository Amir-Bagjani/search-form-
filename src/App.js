import { useState } from "react";
import { Users } from "./users"

function App() {
  const [query,setQuery] = useState("")
  return (
    <div className="App">
      <input className="input" type="search" onChange={e => setQuery(e.target.value)} />
      <ol>
        {Users.filter(user => user.first_name.toLowerCase().includes(query)).map(user => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
