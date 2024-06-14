import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import {HTML_RESULTS,JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS} from "./data";
import "./index.css";
function App() {
  return (
    <> 
    <Header name={"Duc PNV25A"}/>
      <main className="scores-container">
          <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
          <Scores courseName="JAVA" courseResults={JAVA_RESULTS}/>
          <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}/>
          <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
