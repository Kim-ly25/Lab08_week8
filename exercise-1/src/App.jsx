import React from "react";
import Header from "./components/header.jsx";
import Scores from "./components/Scores.jsx";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header batchName="NPC batch 2024" />
      <main className="scores-container">
        <Scores courseName="Java" results={JAVA_RESULTS} />
        <Scores courseName="Python" results={PYTHON_RESULTS} />
        <Scores courseName="HTML" results={HTML_RESULTS} />
        <Scores courseName="English" results={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;