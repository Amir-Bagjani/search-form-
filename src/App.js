import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4040/users?q=${query}`, {
          signal: controller.signal,
        });
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        if (err.message === "canceled") {
          console.log(`fetch aborted`);
        } else {
          console.log(`ye chize die`);
        }
      }
    };

    fetchData();

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
    </div>
  );
}

export default App;
