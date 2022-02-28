import { useEffect, useState } from "react";
import { Users } from "./users"
import axios from "axios"



function App() {
  const [query,setQuery] = useState("")
  const [data,setData] = useState([])


  useEffect(() => {

    const fetchData = async() => {
      const res = await axios.get(`http://localhost:4040/users`)
      setData(res.data)
    }

    fetchData()

  }, [query])




  return (
    <div className="App">
      <input className="input" type="search" onChange={e => setQuery(e.target.value)} />
      <ol>
        {Users.map(user => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
