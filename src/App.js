import React, { useEffect, useState } from "react";
import axios from "axios";
import DataLoadingComponent from "./components/DataLoading";
import Announcement from "./components/Announcement";

function App() {
  const DataLoading = DataLoadingComponent(Announcement);
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });
  useEffect(() => {
    let URL = "https://dryrun-api.herokuapp.com/";
    axios.get(URL).then((res) => {
      let allResults = res.data;
      setAppState({ loading: false, posts: allResults });
    });
  }, [setAppState]);

  return (
    <div>
      <DataLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

export default App;
