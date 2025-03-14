import Header from "./components/header";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";
import Score from "./components/Score";
 
function App() {
  const batchName = "Batch 2025";
  return (
    <>
    <Header batchName={batchName} className="header" />
    <main className="scores-container">
      <Score courseName="Java" courseResults={JAVA_RESULTS} />
      <Score courseName="Python" courseResults={PYTHON_RESULTS} />
      <Score courseName="HTML" courseResults={HTML_RESULTS} />
      <Score courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
   );
 }
 
 export default App;