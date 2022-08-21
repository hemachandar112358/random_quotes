import React from "react";
import { useState, useEffect } from "react";
import { Button, Typography, Card } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

export default function App() {
  const adviceUrl = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAdvice();
  }, []);

  function getAdvice() {
    setIsLoading(true);
    fetch(adviceUrl)
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        setAdvice(advice);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div id="app">
      <Card sx={{ width: 600, height: 150 }} id="card">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div id="btn">
            <Typography variant="h5" color="text.primary">
              {advice}
            </Typography>
            <Button onClick={getAdvice} variant="contained" id="button">
              GET ADVICE !!!
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
