import { BrowserRouter } from "react-router";
import styles from "./App.module.css";
import Routing from "@/routes";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
