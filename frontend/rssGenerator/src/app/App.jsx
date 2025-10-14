import { BrowserRouter } from "react-router";
import styles from "./App.module.css";
import Routing from "@/routes";

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
