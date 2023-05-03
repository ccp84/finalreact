import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";
import DataLoadingComponent from "./components/DataLoading";
import Announcement from "./components/Announcement";

function App() {
  const DataLoading = DataLoadingComponent(Announcement);
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });
  useEffect(() => {
    axiosInstance.get('').then((res) => {
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
