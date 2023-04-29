import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    let URL = "https://dryrun-api.herokuapp.com/";
    axios.get(URL).then((response) => setResult(response.data));
  }, []);

  function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.gq-magazine.co.uk/photos/5d13a8dc9a22c2e3a894925d/16:9/pass/01-gq-05jun19_b.jpg"
          title="Ben Alldis"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Announcements
          </Typography>
          {result.map((r) => {
            return (
              <React.Fragment key={r.title}>
                <Typography variant="body2" color="text.secondary">
                  {r.title}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  {r.content} | {r.author}
                </Typography>
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  return (
    <React.Fragment>
      <MediaCard />
    </React.Fragment>
  );
}

export default App;
