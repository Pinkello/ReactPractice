import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {}
    };
    fetchURL();
  }, [reqType]);

  return (
    <div className="App">
      <header className="App-header">
        <Form reqType={reqType} setReqType={setReqType} />
        <main>
          {/* <List items={items} /> */}
          <Table items={items} />
        </main>
      </header>
    </div>
  );
}

export default App;
