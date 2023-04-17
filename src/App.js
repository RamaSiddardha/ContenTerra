import React, { useState } from "react";

import DataList from "./components/DataList";
import "./App.css";
// import { useEffect } from "react";
import { useCallback } from "react";
import { Button } from "react-bootstrap";
import AddData from "./components/AddData";

function App() {
  const [addData, setAddData] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addDataHadler = () => {
    setAddData(!addData);
  };

  const fetchHandler = useCallback(async () => {
    var intervelId;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      // console.log(response.ok);
      if (!response.ok) {
        throw new Error("SomeThing Went Wrong.....Retrying.");
      }
      if (response.ok) {
        clearInterval(intervelId);
      }
      const data = await response.json();
      // console.log(data);
      const result = data.data.children.map((exData) => {
        return {
          id: exData.data.url,
          title: exData.data.title,
          selftext_html: exData.data.selftext_html,
          score: exData.data.score,
          url: exData.data.url,
        };
      });
      // console.log(result);
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      intervelId = setInterval(() => {
        fetchHandler();
      }, 5000);
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   fetchHandler();
  // }, [fetchHandler]);

  const cancleFetchHandler = () => {
    setError();
    setLoading(false);
  };
  return (
    <React.Fragment>
      <section>
        <div style={{ margin: "5rem" }}>
          {!addData && (
            <Button onClick={addDataHadler} variant="warning">
              ADD NEW DATA
            </Button>
          )}
          {addData && <AddData addDataCard={addDataHadler} />}
        </div>
        <button onClick={fetchHandler}>Fetch Data</button>
      </section>
      <section>
        <DataList data={data} />
        {isLoading && !error && <p>Loading....</p>}
        <br></br>
        {error && (
          <p>
            {error} <Button onClick={cancleFetchHandler}>Cancel</Button>
          </p>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
