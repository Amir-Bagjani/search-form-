import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4040/users?q=${query}`, {
          signal: controller.signal,
        });
        setData(res.data);
        setLoading(false)
        console.log(res.data);
      } catch (err) {
        if (err.message === "canceled") {
          console.log(`fetch aborted`);
        } else {
          console.log(`somthing else`);
        }
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500)

    return () => controller.abort();
  }, [query]);

  return (
    <div className="App">
      <input
        className="input"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
        {data && <Table users={data} />}
        {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
