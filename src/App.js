import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useAllCostumers, useAllChefs } from "./apis/postApi";

function App() {
  const [allChefs, setAllChefs] = useState([]);
  const [allCostumers, setAllCostumers] = useState([]);


   useAllCostumers();
  useAllChefs();
  // const { data, isPending: costumersLoading, isError: costumersError } = useAllCostumers();

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <h1>Chefs</h1>
        <div>
          {/* {allChefs.map((item) => (
            <div>{item.data}</div>
          ))} */}
        </div>
      </div>
      <div>
        <h1>Costumers</h1>
      </div>
    </div>
  );
}

export default App;
