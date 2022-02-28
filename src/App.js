import { useState } from "react";
import Table from "./Table";
import { Users } from "./users"

const keys = ["first_name", "last_name", "email"]
console.log(Users[0]["email"])

function App() {
  const [query,setQuery] = useState("")

  const search = (data) => {
    // return data.filter(item => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query))
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
  }

  return (
    <div className="App">
      <input className="input" type="search" onChange={e => setQuery(e.target.value)} />
      <Table users={search(Users)} />
    </div>
  );
}

export default App;
